require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        jquery: '../bower_components/jquery/dist/jquery'
    },

    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        }
    }
});

require([
    'app',
    'bootstrap'
], function (app) {
    'use strict';

    app.config(['$routeProvider', function ($routeProvider) {
        //console.log('In routeProvider');
    }]);
});