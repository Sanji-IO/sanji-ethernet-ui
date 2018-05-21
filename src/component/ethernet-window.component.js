const EthernetWindowComponent = {
  bindings: {
    onAuthorized: '&',
    onLogout: '&?'
  },
  template: `<sanji-window window-id="sanji-ethernet-ui"
        window-name="{{'ETHERNET_WINDOW_NAME' | translate}}" show-loading-btn>
        <sanji-window-state default-state ng-if="::$ctrl.isAuthorized(['root', 'admin'])"
          state-name="sanji-form"
          link-name="{{'ETHERNET_WINDOW_SETTING' | translate}}"
          icon="settings">
          <sanji-ethernet-form-container on-logout="$ctrl.logout($event)"></sanji-ethernet-form-container>
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

    logout(event) {
      this.onLogout({
        $event: event
      });
    }
  }
};
export default EthernetWindowComponent;
