const injectMap = new WeakMap();
const $inject = [];
class EthernetWindowDirective {
  constructor(injects) {
    EthernetWindowDirective.directiveFactory.$inject.forEach((item, index) => {
      EthernetWindowDirective[item] = injects[index];
      injectMap.set(EthernetWindowDirective[item], injects[index]);
    });
    this.restrict = 'E';
    this.template = `<sanji-window window-id="sanji-ethernet-ui"
                      window-name="{{'ETHERNET_WINDOW_NAME' | translate}}" show-loading-btn>
                      <sanji-window-state default-state
                        state-name="sanji-info"
                        link-name="{{'ETHERNET_WINDOW_INFO' | translate}}"
                        icon="info">
                        <sanji-ethernet-info-container></sanji-ethernet-info-container>
                      </sanji-window-state>
                      <sanji-window-state
                        state-name="sanji-form"
                        link-name="{{'ETHERNET_WINDOW_SETTING' | translate}}"
                        icon="settings">
                        <sanji-ethernet-form-container></sanji-ethernet-form-container>
                      </sanji-window-state>
                    </sanji-window>`;
  }

  static directiveFactory(...injects) {
    EthernetWindowDirective.instance = new EthernetWindowDirective(injects);
    return EthernetWindowDirective.instance;
  }
}
EthernetWindowDirective.directiveFactory.$inject = $inject;
export default EthernetWindowDirective;
