import EthernetFormController from './form.controller';

const EthernetFormComponent = {
  bindings: {
    tabs: '<data',
    tabIndex: '=',
    submitCallback: '&onSubmit'
  },
  templateUrl: 'sanji-ethernet-form.tpl.html',
  controller: EthernetFormController
};

export default EthernetFormComponent;
