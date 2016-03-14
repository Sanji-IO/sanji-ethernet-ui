import sjCore from 'sanji-core-ui';

import './component.tpl.html';
import EthernetFormContainerController from './component-container.controller';
import EthernetFormController from './component.controller';
import EthernetFormContainerDirective from './component-container.directive';
import EthernetFormDirective from './component.directive';

let app = angular.module('sanji.ethernet.form', [sjCore]);
app.controller('EthernetFormContainerController', EthernetFormContainerController);
app.controller('EthernetFormController', EthernetFormController);
app.directive('sanjiEthernetFormContainer', EthernetFormContainerDirective.directiveFactory);
app.directive('sanjiEthernetForm', EthernetFormDirective.directiveFactory);
export default app = app.name
