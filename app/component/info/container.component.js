import EthernetInfoContainerController from './container.controller';

const EthernetInfoContainerComponent = {
  template: `<sanji-ethernet-info data="vm.data"></sanji-ethernet-info>`,
  controller: EthernetInfoContainerController,
  controllerAs: 'vm'
};
export default EthernetInfoContainerComponent;
