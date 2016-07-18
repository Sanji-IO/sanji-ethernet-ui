import EthernetInfoController from './info.controller';

const EthernetInfoComponent = {
  bindings: {
    tabs: '<data'
  },
  templateUrl: 'sanji-ethernet-info.tpl.html',
  controller: EthernetInfoController,
  controllerAs: 'vm'
};
export default EthernetInfoComponent;
