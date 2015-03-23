define(function () {
    'use strict';
    
    return function () {
        return {
            restrict: 'AE',
            templateUrl: './components/login/partials/login.html',
            controller: 'loginController',
            scope: {
                registerState: '@',
                loginSuccessful: '&'
            }
        };
    };
});