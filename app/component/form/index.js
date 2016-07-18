import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './form.tpl.html';
import EthernetFormContainerComponent from './container.component';
import EthernetFormComponent from './form.component';

let app = angular.module('sanji.ethernet.form', [sjCore]);
app.component('sanjiEthernetFormContainer', EthernetFormContainerComponent);
app.component('sanjiEthernetForm', EthernetFormComponent);
export default app = app.name;
