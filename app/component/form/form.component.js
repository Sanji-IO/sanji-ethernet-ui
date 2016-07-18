import EthernetFormController from './form.controller';

const EthernetFormComponent = {
  bindings: {
    tabs: '<data',
    submitCallback: '&onSubmit'
  },
  templateUrl: 'sanji-ethernet-form.tpl.html',
  controller: EthernetFormController,
  controllerAs: 'vm'
};
export default EthernetFormComponent;
