const $inject = [];
class EthernetFormController {
  constructor(...injects) {
    EthernetFormController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  save(data) {
    this.submitCallback({
      $event: {
        data: data
      }
    });
  }
}
EthernetFormController.$inject = $inject;
export default EthernetFormController;
