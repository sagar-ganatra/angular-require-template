require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        angularMocks: '../bower_components/angular-mocks/angular-mocks',
        angularMessages: '../bower_components/angular-messages/angular-messages',
        angularCookies: '../bower_components/angular-cookies/angular-cookies',
        jquery: '../bower_components/jquery/jquery',
        uirouter: '../bower_components/angular-ui-router/angular-ui-router',
        lumx: '../bower_components/lumx/lumx',
        moment: '../bower_components/moment/moment',
        velocity: '../bower_components/velocity/velocity.min',
        velocityui: '../bower_components/velocity/velocity.ui.min',
        mockModule: '../mocks/mockModule',
        mockServices: '../mocks/mockServices'
        
    },

    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        
        angularMocks: {
            deps: ['angular']  
        },
        
        angularMessages: {
            deps: ['angular']  
        },
        
        angularCookies: {
            deps: ['angular']
        },
        
        uirouter: {
            deps: ['angular']
        },
        
        lumx: {
            deps: ['angular', 'velocity', 'velocityui', 'moment']
        },
        
        velocity: {
            deps: ['jquery']
        },
        
        velocityui: {
            deps: ['velocity']   
        }
    },
    
    waitSeconds: 10000
});

require([
    'angular',
    'jquery',
    'app'
], function (ng, $, app) {
  'use strict';
  $(document).ready(function () {
        ng.bootstrap($('body'), [app.name]);
  });
});