const $inject = ['$log'];
class EthernetService {
  constructor() {
    EthernetService.$inject.forEach((item, index) => this[item] = injects[index]);
  }
}
EthernetService.$inject = $inject;
export default EthernetService;
