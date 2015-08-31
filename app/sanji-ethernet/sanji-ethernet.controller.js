const $inject = ['$log'];
class EthernetController {
  constructor(...injects) {
    EthernetController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.$log.info(this);
  }
}
EthernetController.$inject = $inject;
export default EthernetController;
