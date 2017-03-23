const $inject = ['logger', '$timeout', '$filter'];
class EthernetFormController {
  constructor(...injects) {
    EthernetFormController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  save(data, index) {
    this.submitCallback({
      $event: {
        data: data
      }
    }).then(() => {
      if (index === 1) {
        this.logger.warn(this.$filter('translate')('ETHERNET_FORM_LOGOUT_MSG'));
        this.$timeout(this.onLogout, 2000);
      }
    });
  }
}
EthernetFormController.$inject = $inject;
export default EthernetFormController;
