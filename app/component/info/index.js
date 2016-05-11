import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './info.tpl.html';
import EthernetInfoContainerController from './container.controller';
import EthernetInfoController from './info.controller';
import EthernetInfoContainerComponent from './container.component';
import EthernetInfoComponent from './info.component';

let app = angular.module('sanji.ethernet.info', [sjCore]);
app.controller('EthernetInfoContainerController', EthernetInfoContainerController);
app.controller('EthernetInfoController', EthernetInfoController);
app.component('sanjiEthernetInfoContainer', EthernetInfoContainerComponent);
app.component('sanjiEthernetInfo', EthernetInfoComponent);
export default app = app.name;
