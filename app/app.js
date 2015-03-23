define([
    'angular',
    /*mock module*/
    'mockModule',
    'mockServices',
    /* user defined modules */
    'modules/authModule',
    'modules/loginModule',
    'modules/navbarModule',
    'modules/playerStatsModule',
    /* pages module */
    'modules/pagesModule',
    /* include vendor dependencies here */
    'angularCookies',
    'angularMessages',
    'uirouter',
    'lumx',
], function (ng) {
    'use strict';
    
    var app = ng.module('todoApp', [
        'ngMessages',
        'ngCookies',
        'ui.router',
        'lumx',
        'mockModule',
        'authModule',
        'loginModule',
        'navbarModule',
        'playerStatsModule',
        'pagesModule'
    ]);
    
    app.config(function ($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/login');
        
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'pages/login/partials/login.html',
                controller: 'pages.loginController'
            })
            .state('login.register', {
                url: '/register',
                templateUrl: 'pages/login/partials/register.html'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'pages/home/partials/players.html',
                controller: 'pages.playersController',
                resolve: {
                    players: function (Players) {
                        return Players.get();
                    }
                }
            })
            .state('home.playerDetails', {
                url: '/playerDetails/:playerId',
                templateUrl: 'pages/home/partials/playerStats.html',
                controller: 'pages.playerStatsController',
                resolve: {
                    playerDetails: function (Players, $stateParams) {
                        return Players.get($stateParams.playerId);
                    }
                }
            });
    });
    
    app.run(function ($state, authService) {
        if(!authService.isAuthenticated()) {
            $state.transitionTo('login');
        }
    });
    
    return app;
    
});