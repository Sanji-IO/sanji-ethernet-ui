import angular from 'angular';
import './sanji-ethernet-form.tpl.html';
import EthernetFormContainer from './ethernet-form.container';
import EthernetFormComponent from './form.component';

const sjEthernetForm = angular
  .module('sanji.ethernet.form', [])
  .component('sanjiEthernetFormContainer', EthernetFormContainer)
  .component('sanjiEthernetForm', EthernetFormComponent).name;

export { sjEthernetForm };
