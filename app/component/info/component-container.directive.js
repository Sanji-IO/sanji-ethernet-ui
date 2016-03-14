const injectMap = new WeakMap();
const $inject = [];
class EthernetInfoContainerDirective {
  constructor(injects) {
    EthernetInfoContainerDirective.directiveFactory.$inject.forEach((item, index) => {
      EthernetInfoContainerDirective[item] = injects[index];
      injectMap.set(EthernetInfoContainerDirective[item], injects[index]);
    });
    this.restrict = 'EA';
    this.controller = 'EthernetInfoContainerController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = true;
    this.template = `<sanji-ethernet-info data="vm.data"></sanji-ethernet-info>`;
  }

  static directiveFactory(...injects) {
    EthernetInfoContainerDirective.instance = new EthernetInfoContainerDirective(injects);
    return EthernetInfoContainerDirective.instance;
  }
}
EthernetInfoContainerDirective.directiveFactory.$inject = $inject;
export default EthernetInfoContainerDirective;
