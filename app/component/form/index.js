import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './form.tpl.html';
import EthernetFormContainerController from './container.controller';
import EthernetFormController from './form.controller';
import EthernetFormContainerComponent from './container.component';
import EthernetFormComponent from './form.component';

let app = angular.module('sanji.ethernet.form', [sjCore]);
app.controller('EthernetFormContainerController', EthernetFormContainerController);
app.controller('EthernetFormController', EthernetFormController);
app.component('sanjiEthernetFormContainer', EthernetFormContainerComponent);
app.component('sanjiEthernetForm', EthernetFormComponent);
export default app = app.name;
