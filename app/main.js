require.config({
    paths: {
        angular: '../vendor/angular/angular',
        angularMocks: '../vendor/angular-mocks/angular-mocks',
        angularMessages: '../vendor/angular-messages/angular-messages',
        angularCookies: '../vendor/angular-cookies/angular-cookies',
        jquery: '../vendor/jquery/jquery',
        uirouter: '../vendor/angular-ui-router/angular-ui-router',
        lumx: '../vendor/lumx/lumx',
        moment: '../vendor/moment/moment',
        velocity: '../vendor/velocity/velocity.min',
        velocityui: '../vendor/velocity/velocity.ui.min',
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
    'app',
    'bootstrap'
]);