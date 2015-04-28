define([
    'angular',
    'components/login/login.directive'
],  function(ng, loginDirective) {
        'use strict';
        
        return ng.module('loginModule', [])
                 .directive('login', loginDirective);
    }
);