import angular from 'angular';

import './info.tpl.html';
import EthernetInfoContainerComponent from './container.component';
import EthernetInfoComponent from './info.component';

const sjEthernetInfo = angular.module('sanji.ethernet.info', [])
  .component('sanjiEthernetInfoContainer', EthernetInfoContainerComponent)
  .component('sanjiEthernetInfo', EthernetInfoComponent)
  .name;
export {sjEthernetInfo};
