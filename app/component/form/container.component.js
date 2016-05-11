const EthernetFormContainerComponent = {
  template: `<sanji-ethernet-form data="vm.data" on-submit="vm.onSave(data)"></sanji-ethernet-form>`,
  controller: 'EthernetInfoContainerController',
  controllerAs: 'vm'
};
export default EthernetFormContainerComponent;
