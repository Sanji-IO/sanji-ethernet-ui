import 'angular-material.css';
import 'angular-sanji-window.css';
import 'toastr.css';
import './app.scss';
import angular from 'angular';
import {sjCore} from 'sanji-core-ui';
import {sjEthernet} from './component';

const app = angular.module('webapp', [sjEthernet, sjCore]);
class AppController {
  constructor($translate, LANG_KEYS) {
    this.$translate = $translate;
    this.currentLang = $translate.use();
    this.langs = LANG_KEYS;
  }

  changeLang(lang) {
    this.$translate.use(lang);
  }
}
app.controller('AppController', AppController);

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
