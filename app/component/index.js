import angular from 'angular';
import sjCore from 'sanji-core-ui';

import sjEthernetInfo from './info';
import sjEthernetForm from './form';

import i18nConfig from './component.i18n';
import EthernetService from './component.service';
import EthernetWindowComponent from './window.component';

let app = angular.module('sanji.ethernet', [
  sjCore,
  sjEthernetInfo,
  sjEthernetForm
]);
app.config(i18nConfig);
app.service('ethernetService', EthernetService);
app.component('sanjiEthernetWindow', EthernetWindowComponent);
export default app = app.name;
