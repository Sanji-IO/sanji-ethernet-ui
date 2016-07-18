import angular from 'angular';
import sjCore from 'sanji-core-ui';

import './info.tpl.html';
import EthernetInfoContainerComponent from './container.component';
import EthernetInfoComponent from './info.component';

let app = angular.module('sanji.ethernet.info', [sjCore]);
app.component('sanjiEthernetInfoContainer', EthernetInfoContainerComponent);
app.component('sanjiEthernetInfo', EthernetInfoComponent);
export default app = app.name;
