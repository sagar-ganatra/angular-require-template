define(function () {
    'use strict';
    
    return function () {
        return {
            restrict: 'AE',
            templateUrl: './components/navbar/navbar.html',
            scope: {
                title: '@',
                onSignOut: '&'
            }
        };
    };
});