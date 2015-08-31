const $inject = ['$log', '$scope', 'ethernetService'];
class EthernetContainerController {
  constructor(...injects) {
    EthernetContainerController.$inject.forEach((item, index) => this[item] = injects[index]);
    this.data =[];
    this.ethernetService.get().then((collection) => {
      this.data = collection;
      this.sanjiWindowMgr.goToInfoState();
    });
  }
}
EthernetContainerController.$inject = $inject;
export default EthernetContainerController;
