import angular from 'angular';

import './form.tpl.html';
import EthernetFormContainerComponent from './container.component';
import EthernetFormComponent from './form.component';

const sjEthernetForm = angular
  .module('sanji.ethernet.form', [])
  .component('sanjiEthernetFormContainer', EthernetFormContainerComponent)
  .component('sanjiEthernetForm', EthernetFormComponent).name;
export { sjEthernetForm };
