import EthernetFormController from './form.controller';

const EthernetFormComponent = {
  bindings: {
    tabs: '<data',
    submitCallback: '&onSubmit',
    onLogout: '&'
  },
  templateUrl: 'sanji-ethernet-form.tpl.html',
  controller: EthernetFormController
};
export default EthernetFormComponent;
