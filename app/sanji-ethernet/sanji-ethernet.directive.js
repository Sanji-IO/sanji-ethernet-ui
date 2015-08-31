const injectMap = new WeakMap();
const $inject = ['$log'];
class EthernetDirective {
  constructor(injects) {
    EthernetDirective.directiveFactory.$inject.forEach((item, index) => {
      EthernetDirective[item] = injects[index];
      injectMap.set(EthernetDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-ethernet-main.tpl.html'
    this.restrict = 'EA';
    this.controller = 'EthernetController';
    this.controllerAs = 'vm';
    this.bindToController = true;
    this.scope = {
      ethernets: '=data',
      sanjiWindowMgr: '='
    }
  }

  static directiveFactory(...injects) {
    EthernetDirective.instance = new EthernetDirective(injects);
    return EthernetDirective.instance;
  }
}
EthernetDirective.directiveFactory.$inject = $inject;
export default EthernetDirective;
