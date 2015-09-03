const $inject = ['$log', '$http'];
class EthernetService {
  constructor(...injects) {
    EthernetService.$inject.forEach((item, index) => this[item] = injects[index]);
    this.collection = null;
  }

  get() {
    return this.$http.get('http://private-d8e84-sanjigeneric.apiary-mock.com/network/ethernets')
      .then((res) => {
        this.collection = angular.copy(res.data);
        return this.collection;
      })
  }
}
EthernetService.$inject = $inject;
export default EthernetService;
