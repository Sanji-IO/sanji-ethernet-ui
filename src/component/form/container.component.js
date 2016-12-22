import EthernetFormContainerController from './container.controller';

const EthernetFormContainerComponent = {
  template: `<sanji-ethernet-form data="vm.data" on-submit="vm.onSave(data)"></sanji-ethernet-form>`,
  controller: EthernetFormContainerController,
  controllerAs: 'vm'
};
export default EthernetFormContainerComponent;
