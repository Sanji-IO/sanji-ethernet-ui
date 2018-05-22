import EthernetInfoController from './ethernet-info.controller';

const EthernetInfoComponent = {
  bindings: {
    tabs: '<data',
    tabIndex: '='
  },
  templateUrl: 'sanji-ethernet-info.tpl.html',
  controller: EthernetInfoController
};
export default EthernetInfoComponent;
