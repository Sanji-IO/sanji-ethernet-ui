const $inject = ['$q', 'rest', 'exception', '_', 'pathToRegexp'];
const config = require('./component.resource.json');
class EthernetService {
  constructor(...injects) {
    EthernetService.$inject.forEach((item, index) => this[item] = injects[index]);
    this.collection = [];
  }

  _transform(data) {
    switch(config.get.type) {
      case 'collection':
        return this._.map(data, (item, index) => {
          return {
            title: 'eth' + index,
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
        return this._.map(data, (item, index) => {
          return {
            title: 'eth' + index,
            content: item,
            formOptions: {},
            fields: config.fields
          };
        });
    }
  }

  get() {
    let toPath = this.pathToRegexp.compile(config.get.url);
    return this.rest.get(toPath())
    .then(res => {
      this.collection = this._transform(res.data);
    })
    .catch(err => {
      this.exception.catcher('[EthernetService] Get data error.')(err);
      return this.$q.reject();
    });
  }

  update(data) {
    let toPath = this.pathToRegexp.compile(config.put.url);
    let path = (undefined !== data.content.id) ? toPath({id: data.content.id}) : toPath();
    return this.rest.put(path, data.content, data.formOptions.files)
    .catch(err => {
      this.exception.catcher('[EthernetService] Update data error.')(err);
      return this.$q.reject();
    });
  }
}
EthernetService.$inject = $inject;
export default EthernetService;
