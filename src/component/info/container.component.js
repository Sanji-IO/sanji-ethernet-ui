import EthernetInfoContainerController from './container.controller';

const EthernetInfoContainerComponent = {
  template: `<sanji-ethernet-info data="$ctrl.data" tab-index="$ctrl.sanjiWindowMgr.tabIndex"></sanji-ethernet-info>`,
  controller: EthernetInfoContainerController
};
export default EthernetInfoContainerComponent;
