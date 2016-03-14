const $inject = ['$scope', 'sanjiWindowService', 'ethernetService'];
const WINDOW_ID = 'sanji-ethernet-ui';
class EthernetInfoContainerController {
  constructor(...injects) {
    EthernetInfoContainerController.$inject.forEach((item, index) => this[item] = injects[index]);

    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
    this.data = this.ethernetService.data;

    this.activate();

    this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this))
  }

  activate() {
    this.sanjiWindowMgr.promise = this.ethernetService.get().then(() => {
      this.data = this.ethernetService.data;
    });
  }

  onRefresh(event, args) {
    if (args.id === WINDOW_ID) {
      this.activate();
    }
  }

  onSave(data) {
    this.sanjiWindowMgr.promise = this.ethernetService.update(data);
  }
}
EthernetInfoContainerController.$inject = $inject;
export default EthernetInfoContainerController;
