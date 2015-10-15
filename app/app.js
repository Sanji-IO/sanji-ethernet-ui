import 'angular-material.css';
import 'toastr.scss';
import './app.scss';
import 'angular';
import component from './component';

let app = angular.module('webapp', [component]);
app.config(restProvider => {
  restProvider.configure({basePath: 'http://private-d8e84-sanjigeneric.apiary-mock.com'});
});
app.run(formlyConfig => {
  formlyConfig.setType({
    name: 'input',
    template: '<input ng-model="model[options.key]">'
  });

  formlyConfig.setType({
    name: 'checkbox',
    template: '<md-checkbox ng-model="model[options.key]">{{to.label}}</md-checkbox>'
  });

  formlyConfig.setWrapper({
    name: 'mdLabel',
    types: ['input'],
    template: '<label>{{to.label}}</label><formly-transclude></formly-transclude>'
  });

  formlyConfig.setWrapper({
    name: 'mdInputContainer',
    types: ['input'],
    template: '<md-input-container><formly-transclude></formly-transclude></md-input-container>'
  });
});
