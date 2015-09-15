import _ from 'lodash';
import sjWindow from 'angular-sanji-window';
import sjCore from 'sanji-core-ui';

import './component-main.tpl.html';
import './component-info.tpl.html';
import './component-edit.tpl.html';
import './component.scss';
import EthernetService from './component.service';
import EthernetContainerController from './component-container.controller';
import EthernetController from './component.controller';
import EthernetContainerDirective from './component-container.directive';
import EthernetDirective from './component.directive';

let app = angular.module('sanji.ethernet', [sjCore, sjWindow]);
app.constant('_', _);
app.service('ethernetService', EthernetService);
app.controller('EthernetContainerController', EthernetContainerController);
app.controller('EthernetController', EthernetController);
app.directive('sanjiEthernetContainer', EthernetContainerDirective.directiveFactory);
app.directive('sanjiEthernet', EthernetDirective.directiveFactory);
export default app = app.name
