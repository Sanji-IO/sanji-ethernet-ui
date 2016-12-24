const $inject = ['$scope', '$ngRedux', 'sanjiWindowService', 'ethernetAction'];
const WINDOW_ID = 'sanji-ethernet-ui';
class EthernetInfoContainerController {
  constructor(...injects) {
    EthernetInfoContainerController.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  $onInit() {
    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
    this.unhandler = this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this));
    this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, this.ethernetAction)(this);
    this.sanjiWindowMgr.promise = this.getEthernets();
  }

  $onDestroy() {
    this.unhandler();
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      data: state.ethernets
    };
  }

  onRefresh(event, args) {
    if (args.id === WINDOW_ID) {
      this.sanjiWindowMgr.promise = this.getEthernets({force: true});
    }
  }
}
EthernetInfoContainerController.$inject = $inject;
export default EthernetInfoContainerController;
