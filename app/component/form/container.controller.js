const $inject = ['$scope', 'sanjiWindowService', 'ethernetService'];
const WINDOW_ID = 'sanji-ethernet-ui';
class EthernetFormContainerController {
  constructor(...injects) {
    EthernetFormContainerController.$inject.forEach((item, index) => this[item] = injects[index]);

    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
    this.data = this.ethernetService.data;
    this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this));
  }

  onRefresh(event, args) {
    if (args.id === WINDOW_ID) {
      this.sanjiWindowMgr.promise = this.ethernetService.get().then(() => {
        this.data = this.ethernetService.data;
      });
    }
  }

  onSave(data) {
    this.sanjiWindowMgr.promise = this.ethernetService.update(data);
  }
}
EthernetFormContainerController.$inject = $inject;
export default EthernetFormContainerController;
