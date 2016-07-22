import angular from 'angular';
import {sjCore} from 'sanji-core-ui';

import './form.tpl.html';
import EthernetFormContainerComponent from './container.component';
import EthernetFormComponent from './form.component';

const sjEthernetForm = angular.module('sanji.ethernet.form', [sjCore])
  .component('sanjiEthernetFormContainer', EthernetFormContainerComponent)
  .component('sanjiEthernetForm', EthernetFormComponent)
  .name;
export {sjEthernetForm};
