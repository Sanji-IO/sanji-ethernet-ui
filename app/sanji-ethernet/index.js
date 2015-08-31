import './sanji-ethernet-main.tpl.html';
import './sanji-ethernet-info.tpl.html';
import './sanji-ethernet-edit.tpl.html';
import EthernetService from './sanji-ethernet.service';
import EthernetContainerController from './sanji-ethernet-container.controller';
import EthernetController from './sanji-ethernet.controller';
import EthernetContainerDirective from './sanji-ethernet-container.directive';
import EthernetDirective from './sanji-ethernet.directive';

angular.module('sanji.ethernet', ['sanji.window'])
  .service('ethernetService', EthernetService)
  .controller('EthernetContainerController', EthernetContainerController)
  .controller('EthernetController', EthernetController)
  .directive('sanjiEthernetContainer', EthernetContainerDirective.directiveFactory)
  .directive('sanjiEthernet', EthernetDirective.directiveFactory);
