const $inject = ['$q', 'rest', 'exception'];
class EthernetService {
  constructor(...injects) {
    EthernetService.$inject.forEach((item, index) => this[item] = injects[index]);
    this.collection = [];
  }

  _transform(data) {
    return _.map(data, (item, index) => {
      return {
        title: 'eth' + index,
        content: item,
        fields: [
          {
            key: 'ip',
            type: 'input',
            templateOptions: {
              label: 'Input'
            }
          }
        ]
      };
    });
  }

  get() {
    return this.rest.get('/network/ethernets')
    .then(res => {
      this.collection = this._transform(res.data);
    })
    .catch(err => {
      this.exception.catcher('[EthernetService] Get data error.')(err);
      return this.$q.reject();
    });
  }
}
EthernetService.$inject = $inject;
export default EthernetService;
