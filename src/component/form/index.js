import angular from 'angular';
import './sanji-ethernet-form.tpl.html';
import EthernetFormContainerComponent from './container.component';
import EthernetFormComponent from './form.component';

const sjEthernetForm = angular
  .module('sanji.ethernet.form', [])
  .component('sanjiEthernetFormContainer', EthernetFormContainerComponent)
  .component('sanjiEthernetForm', EthernetFormComponent).name;

export { sjEthernetForm };
