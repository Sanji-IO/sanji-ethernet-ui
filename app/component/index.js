import _ from 'lodash';
import formly from 'angular-formly';
import sjWindow from 'angular-sanji-window';
import sjLogger from 'sanji-logger-ui';
import sjException from 'sanji-exception-ui';
import sjRest from 'sanji-rest-ui';

import './component-edit.tpl.html';
import './component.scss';
import EthernetService from './component.service';
import EthernetContainerController from './component-container.controller';
import EthernetController from './component.controller';
import EthernetContainerDirective from './component-container.directive';
import EthernetDirective from './component.directive';

let app = angular.module('sanji.ethernet', [
  formly,
  sjWindow,
  sjLogger,
  sjException,
  sjRest
]);
app.constant('_', _);
app.service('ethernetService', EthernetService);
app.controller('EthernetContainerController', EthernetContainerController);
app.controller('EthernetController', EthernetController);
app.directive('sanjiEthernetContainer', EthernetContainerDirective.directiveFactory);
app.directive('sanjiEthernet', EthernetDirective.directiveFactory);
export default app = app.name
