import sjCore from 'sanji-core-ui';

import './component.tpl.html';
import EthernetInfoContainerController from './component-container.controller';
import EthernetInfoController from './component.controller';
import EthernetInfoContainerDirective from './component-container.directive';
import EthernetInfoDirective from './component.directive';

let app = angular.module('sanji.ethernet.info', [sjCore]);
app.controller('EthernetInfoContainerController', EthernetInfoContainerController);
app.controller('EthernetInfoController', EthernetInfoController);
app.directive('sanjiEthernetInfoContainer', EthernetInfoContainerDirective.directiveFactory);
app.directive('sanjiEthernetInfo', EthernetInfoDirective.directiveFactory);
export default app = app.name
