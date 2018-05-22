import EthernetInfoContainerController from './ethernet-info-container.controller';

const EthernetInfoContainer = {
  template: `<sanji-ethernet-info data="$ctrl.data" tab-index="$ctrl.sanjiWindowMgr.tabIndex"></sanji-ethernet-info>`,
  controller: EthernetInfoContainerController
};
export default EthernetInfoContainer;
