define(function () {
    'use strict';
    
    return function () {
        return {
            restrict: 'AE',
            templateUrl: './components/navbar/partials/navbarTemplate.html',
            scope: {
                title: '@'
            }
        };
    };
});