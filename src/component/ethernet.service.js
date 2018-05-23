import { cloneDeep } from 'lodash/fp';
import YAML from 'js-yaml';

const $inject = ['$q', 'rest', 'exception', 'pathToRegexp', '$filter', 'logger'];
const config = require('./component.resource.json');
const schema = YAML.load(require('./../../schema/index.yaml'));

class EthernetService {

  constructor(...injects) {
    EthernetService.$inject.forEach((item, index) => (this[item] = injects[index]));
    this.message = {
      read: {
        error: '[EthernetService] Get data error.'
      },
      update: {
        success: 'ETHERNET_FORM_SAVE_SUCCESS',
        error: '[EthernetService] Update data error.'
      }
    };
    this.restConfig = {
      basePath: process.env.NODE_ENV === 'development' ? __BASE_PATH__ : undefined,
      headers: { 'mx-api-token': __API_TOKEN__ }
    };
    this.cache;

    this.validEthernetProps = Object.keys(schema.definitions.Ethernet.properties).filter(prop => ! prop.readonly);
    this.validDhcpdProps = Object.keys(schema.definitions.DHCPServer.properties).filter(prop => ! prop.readonly);
  }

  _transform(data) {
    return data.map(rawItem => {
      const item = Object.assign({}, rawItem, {networkType: rawItem.wan ? 'WAN' : 'LAN'});
      return {
        content: item,
        formOptions: {},
        fields: item.wan ? config.wanFields : config.lanFields
      };
    });
  }

  setResponseMsg(message) {
    if (message) {
      this.message = Object.assign(this.message, message);
    }
  }

  get() {

    return Promise.all([
      this.rest.get('/network/dns', this.restConfig),
      this.rest.get('/network/ethernets', this.restConfig),
      this.rest.get('/network/dhcpd', this.restConfig)
    ])
    .then(resArr => {

      // https://trello.com/c/huGccHx3/48-ethernet-web
      // dns from /network/dns API
      const dnsFromNetworkDns = resArr[0].data.dns;

      const data = cloneDeep(resArr[1].data)
        .map((row, index) => {

          if (row.wan) {
            row.dns = dnsFromNetworkDns;
            return row;
          }
          return Object.assign({}, row, resArr[2].data.collection[index]);
        });

      this.cache = data;
      return this._transform(data);
    })
    .catch(err => {
      this.exception.catcher(this.$filter('translate')(this.message.get.error))(err);
      return this.$q.reject();
    });
  }

  update(data) {

    const toPath = this.pathToRegexp.compile(config.put.url);
    const dataContent = data.content;
    const path = undefined !== dataContent.id ? toPath({ id: dataContent.id }) : toPath();

    const byProps = (obj, prop) => {
      if (prop in dataContent) {
        obj[prop] = dataContent[prop];
      }
      return obj;
    };

    const validEthernetContent = this.validEthernetProps.reduce(byProps, {});
    const promises = [this.rest.put(path, validEthernetContent, data.formOptions.files, this.restConfig)];
    const isLan = (! dataContent.wan);

    if (isLan && dataContent.enable && dataContent.id) {
      const validDhcpdContent = this.validDhcpdProps.reduce(byProps, {});
      promises.push(this.rest.put(`/network/dhcpd/${dataContent.id}`, validDhcpdContent,  data.formOptions.files, this.restConfig));
    }

    return Promise.all(promises)
      .then(() => {
        this.logger.success(this.$filter('translate')(this.message.update.success), dataContent);
        return { content: dataContent };
      })
      .catch(err => {
        this.exception.catcher(this.$filter('translate')(this.message.update.error))(err);
        return this.$q.reject();
      });
  }

}

EthernetService.$inject = $inject;

export default EthernetService;
