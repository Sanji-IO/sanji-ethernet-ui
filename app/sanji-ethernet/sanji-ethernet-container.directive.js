const injectMap = new WeakMap();
const $inject = ['$log'];
class EthernetContainerDirective {
  constructor(injects) {
    EthernetContainerDirective.directiveFactory.$inject.forEach((item, index) => {
      EthernetContainerDirective[item] = injects[index];
      injectMap.set(EthernetContainerDirective[item], injects[index]);
    });
    this.restrict = 'EA';
    this.controller = 'EthernetContainerController';
    this.controllerAs = 'vm';
    this.scope = true;
    this.bindToController = {
      sanjiWindowMgr: '='
    };
    this.template = `<sanji-ethernet data="vm.data" sanji-window-mgr="vm.sanjiWindowMgr"></sanji-ethernet>`;
  }

  static directiveFactory(...injects) {
    EthernetContainerDirective.instance = new EthernetContainerDirective(injects);
    return EthernetContainerDirective.instance;
  }
}
EthernetContainerDirective.directiveFactory.$inject = $inject;
export default EthernetContainerDirective;
