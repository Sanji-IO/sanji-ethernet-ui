const $inject = ['sanjiWindowService', 'ethernetService'];
class EthernetContainerController {
  constructor(...injects) {
    EthernetContainerController.$inject.forEach((item, index) => this[item] = injects[index]);

    const WINDOW_ID = 'ethernet';
    const EDIT_STATE = 'sanji-edit';
    let ethernetService = this.ethernetService;
    let sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);

    this.data = ethernetService.collection;

    ethernetService.get().then(() => {
      this.data = ethernetService.collection;
      sanjiWindowMgr.navigateTo(EDIT_STATE);
    });
  }
}
EthernetContainerController.$inject = $inject;
export default EthernetContainerController;
