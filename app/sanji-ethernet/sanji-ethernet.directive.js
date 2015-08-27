const injectMap = new WeakMap();
const $inject = ['$log'];
class EthernetDirective {
  constructor(injects) {
    EthernetDirective.directiveFactory.$inject.forEach((item, index) => {
      EthernetDirective[item] = injects[index];
      injectMap.set(EthernetDirective[item], injects[index]);
    });
    this.template = `<sanji-window title="Ethernet"
                      content-url="sanji-ethernet-main.tpl.html">
                      </sanji-window>`;
    this.restrict = 'EA';
  }

  static directiveFactory(...injects) {
    EthernetDirective.instance = new EthernetDirective(injects);
    return EthernetDirective.instance;
  }
}
EthernetDirective.directiveFactory.$inject = $inject;
export default EthernetDirective;
