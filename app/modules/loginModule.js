define([
    'angular',
    'components/login/directives/loginDirective',
    'components/login/controllers/loginController',
    'domain/User'
],  function(ng, loginDirective, loginController, User) {
        'use strict';
        
        return ng.module('loginModule', [])
                 .directive('login', loginDirective)
                 .controller('loginController', loginController)
                 .service('User', User);
    }
);