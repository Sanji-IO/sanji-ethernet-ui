import './component-main.tpl.html';
import './component-info.tpl.html';
import './component-edit.tpl.html';
import './component.scss';
import EthernetService from './component.service';
import EthernetContainerController from './component-container.controller';
import EthernetController from './component.controller';
import EthernetContainerDirective from './component-container.directive';
import EthernetDirective from './component.directive';

angular.module('sanji.ethernet', ['sanji.window'])
  .constant('_', _)
  .service('ethernetService', EthernetService)
  .controller('EthernetContainerController', EthernetContainerController)
  .controller('EthernetController', EthernetController)
  .directive('sanjiEthernetContainer', EthernetContainerDirective.directiveFactory)
  .directive('sanjiEthernet', EthernetDirective.directiveFactory);
