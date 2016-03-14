const injectMap = new WeakMap();
const $inject = [];
class EthernetInfoDirective {
  constructor(injects) {
    EthernetInfoDirective.directiveFactory.$inject.forEach((item, index) => {
      EthernetInfoDirective[item] = injects[index];
      injectMap.set(EthernetInfoDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-ethernet-info.tpl.html'
    this.restrict = 'EA';
    this.controller = 'EthernetInfoController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController ={
      tabs: '=data'
    };
  }

  static directiveFactory(...injects) {
    EthernetInfoDirective.instance = new EthernetInfoDirective(injects);
    return EthernetInfoDirective.instance;
  }
}
EthernetInfoDirective.directiveFactory.$inject = $inject;
export default EthernetInfoDirective;
