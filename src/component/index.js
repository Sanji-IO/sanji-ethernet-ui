import angular from 'angular';
import { sjEthernetInfo } from './info';
import { sjEthernetForm } from './form';
import i18nConfig from './component.i18n';
import { EthernetAction, ethernets, GET_ETHERNETS, UPDATE_ETHERNET } from './component.module';
import EthernetService from './ethernet.service';
import EthernetWindowComponent from './ethernet-window.component';

const sjEthernet = angular
  .module('sanji.ethernet', [sjEthernetInfo, sjEthernetForm])
  .config(i18nConfig)
  .factory('ethernetAction', EthernetAction)
  .service('ethernetService', EthernetService)
  .component('sanjiEthernetWindow', EthernetWindowComponent).name;

export { sjEthernet, ethernets, GET_ETHERNETS, UPDATE_ETHERNET };
