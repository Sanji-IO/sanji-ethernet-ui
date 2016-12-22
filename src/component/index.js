import angular from 'angular';

import {sjEthernetInfo} from './info';
import {sjEthernetForm} from './form';

import i18nConfig from './component.i18n';
import EthernetService from './component.service';
import EthernetWindowComponent from './window.component';

const sjEthernet = angular.module('sanji.ethernet', [
  sjEthernetInfo,
  sjEthernetForm
])
  .config(i18nConfig)
  .service('ethernetService', EthernetService)
  .component('sanjiEthernetWindow', EthernetWindowComponent)
  .name;
export {sjEthernet};
