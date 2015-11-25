import sjCore from 'sanji-core-ui';

import './component.tpl.html';
import './component.style.scss';
import i18nConfig from './component.i18n';
import EthernetService from './component.service';
import EthernetContainerController from './component-container.controller';
import EthernetController from './component.controller';
import EthernetContainerDirective from './component-container.directive';
import EthernetDirective from './component.directive';
import EthernetWindowDirective from './component-window.directive';

let app = angular.module('sanji.ethernet', [sjCore]);
app.config(i18nConfig);
app.service('ethernetService', EthernetService);
app.controller('EthernetContainerController', EthernetContainerController);
app.controller('EthernetController', EthernetController);
app.directive('sanjiEthernetContainer', EthernetContainerDirective.directiveFactory);
app.directive('sanjiEthernet', EthernetDirective.directiveFactory);
app.directive('sanjiEthernetWindow', EthernetWindowDirective.directiveFactory);
export default app = app.name
