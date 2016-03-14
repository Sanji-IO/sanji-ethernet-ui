const injectMap = new WeakMap();
const $inject = [];
class EthernetFormDirective {
  constructor(injects) {
    EthernetFormDirective.directiveFactory.$inject.forEach((item, index) => {
      EthernetFormDirective[item] = injects[index];
      injectMap.set(EthernetFormDirective[item], injects[index]);
    });
    this.templateUrl = 'sanji-ethernet-form.tpl.html'
    this.restrict = 'EA';
    this.controller = 'EthernetFormController';
    this.controllerAs = 'vm';
    this.scope = {};
    this.bindToController ={
      tabs: '=data',
      submitCallback: '&onSubmit'
    };
  }

  static directiveFactory(...injects) {
    EthernetFormDirective.instance = new EthernetFormDirective(injects);
    return EthernetFormDirective.instance;
  }
}
EthernetFormDirective.directiveFactory.$inject = $inject;
export default EthernetFormDirective;
