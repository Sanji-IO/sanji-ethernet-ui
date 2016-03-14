const $inject = [];
class EthernetInfoController {
  constructor(...injects) {
    EthernetInfoController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  save(data) {
    this.submitCallback({data: data});
  }
}
EthernetInfoController.$inject = $inject;
export default EthernetInfoController;
