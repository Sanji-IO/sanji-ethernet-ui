import _ from 'lodash';

const $inject = ['$q', 'rest', 'exception', 'pathToRegexp', '$filter', 'logger'];
const config = require('./component.resource.json');
class EthernetService {
  constructor(...injects) {
    EthernetService.$inject.forEach((item, index) => this[item] = injects[index]);
    this.message = {
      read: {
        error: '[EthernetService] Get data error.'
      },
      update: {
        success: 'ETHERNET_FORM_SAVE_SUCCESS',
        error: '[EthernetService] Update data error.'
      }
    };

    switch(config.get.type) {
    case 'collection':
      this.data = [];
      break;
    case 'model':
      this.data = {};
      break;
    default:
      this.data = [];
    }
  }

  _transform(data) {
    switch(config.get.type) {
    case 'collection':
      return _.map(data, (item, index) => {
        return {
          title: (config.get.titlePrefix || 'tab') + index,
          content: item,
          formOptions: {},
          fields: config.fields
        };
      });
    case 'model':
      return {
        content: data,
        formOptions: {},
        fields: config.fields
      };
    default:
      return _.map(data, (item, index) => {
        return {
          title: (config.get.titlePrefix || 'tab') + index,
          content: item,
          formOptions: {},
          fields: config.fields
        };
      });
    }
  }

  setResponseMsg(message) {
    if (message) {
      this.message = Object.assign(this.message, message);
    }
  }

  get() {
    const toPath = this.pathToRegexp.compile(config.get.url);
    return this.rest.get(toPath(), (__DEV__) ? {basePath: __BASE_PATH__} : undefined)
    .then(res => this.data = this._transform(res.data))
    .catch(err => {
      this.exception.catcher(this.$filter('translate')(this.message.get.error))(err);
      return this.$q.reject();
    });
  }

  update(data) {
    const toPath = this.pathToRegexp.compile(config.put.url);
    const path = (undefined !== data.content.id) ? toPath({id: data.content.id}) : toPath();
    return this.rest.put(path, data.content, data.formOptions.files, (__DEV__) ? {basePath:  __BASE_PATH__} : undefined)
    .then(res => {
      this.logger.success(this.$filter('translate')(this.message.update.success), res.data);
      return res.data;
    })
    .catch(err => {
      this.exception.catcher(this.$filter('translate')(this.message.update.error))(err);
      return this.$q.reject();
    });
  }
}
EthernetService.$inject = $inject;
export default EthernetService;
