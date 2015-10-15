const $inject = [];
class EthernetController {
  constructor(...injects) {
    EthernetController.$inject.forEach((item, index) => this[item] = injects[index]);
  }
}
EthernetController.$inject = $inject;
export default EthernetController;
