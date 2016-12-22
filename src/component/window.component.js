const EthernetWindowComponent = {
  bindings: {
    onAuthorized: '&'
  },
  template: `<sanji-window window-id="sanji-ethernet-ui"
              window-name="{{'ETHERNET_WINDOW_NAME' | translate}}" show-loading-btn>
              <sanji-window-state default-state
                state-name="sanji-info"
                link-name="{{'ETHERNET_WINDOW_INFO' | translate}}"
                icon="info">
                <sanji-ethernet-info-container></sanji-ethernet-info-container>
              </sanji-window-state>
              <sanji-window-state ng-if="::$ctrl.isAuthorized(['superadmin', 'admin'])"
                state-name="sanji-form"
                link-name="{{'ETHERNET_WINDOW_SETTING' | translate}}"
                icon="settings">
                <sanji-ethernet-form-container></sanji-ethernet-form-container>
              </sanji-window-state>
            </sanji-window>`,
  controller: class EthernetWindowController {
    constructor() {}

    isAuthorized(roles) {
      return this.onAuthorized({
        $event: {
          roles: roles
        }
      });
    }
  }
};
export default EthernetWindowComponent;
