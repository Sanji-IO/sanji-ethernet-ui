import 'angular-material.css';
import 'angular-sanji-window.css';
import 'toastr.css';
import './app.scss';
import angular from 'angular';
import { sjCore } from 'sanji-core-ui';
import { sjEthernet, ethernets } from './component';

const app = angular.module('webapp', [sjCore, sjEthernet]);
class AppController {
  constructor($translate, LANG_KEYS, auth) {
    this.$translate = $translate;
    this.currentLang = $translate.use();
    this.langs = LANG_KEYS;
    this.auth = auth;
  }

  changeLang(lang) {
    this.$translate.use(lang);
  }

  isAuthorized(event) {
    return this.auth.isAuthorized(event.roles);
  }

  logout(event) {
    console.log('logout execute', event);
  }
}
app.config(reduxHelperProvider => {
  reduxHelperProvider.configure(
    { ethernets },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
});
app.run(session => {
  session.create('token', 'test');
  session.setUserData({
    role: 'admin'
  });
});
app.controller('AppController', AppController);

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
