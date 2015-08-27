import './sanji-ethernet-main.tpl.html';
import './sanji-ethernet-info.tpl.html';
import './sanji-ethernet-edit.tpl.html';
import EthernetService from './sanji-ethernet.service';
import EthernetController from './sanji-ethernet.controller';
import EthernetDirective from './sanji-ethernet.directive';

angular.module('sanji.ethernet', ['sanji.window'])
  .service('ethernetService', EthernetService)
  .controller('EthernetController', EthernetController)
  .directive('sanjiEthernet', EthernetDirective.directiveFactory);
