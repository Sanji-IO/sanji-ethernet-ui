const injectMap = new WeakMap();
const $inject = [];
class EthernetFormContainerDirective {
  constructor(injects) {
    EthernetFormContainerDirective.directiveFactory.$inject.forEach((item, index) => {
      EthernetFormContainerDirective[item] = injects[index];
      injectMap.set(EthernetFormContainerDirective[item], injects[index]);
    });
    this.restrict = 'EA';
    this.controller = 'EthernetFormContainerController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController = true;
    this.template = `<sanji-ethernet-form data="vm.data" on-submit="vm.onSave(data)"></sanji-ethernet-form>`;
  }

  static directiveFactory(...injects) {
    EthernetFormContainerDirective.instance = new EthernetFormContainerDirective(injects);
    return EthernetFormContainerDirective.instance;
  }
}
EthernetFormContainerDirective.directiveFactory.$inject = $inject;
export default EthernetFormContainerDirective;
