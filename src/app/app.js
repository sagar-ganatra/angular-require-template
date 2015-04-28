define([
    'angular',
    /*mock module*/
    'mockModule',
    'mockServices',
    /* user defined modules */
    'components/auth/auth.module',
    'components/login/login.module',
    'components/navbar/navbar.module',
    'components/playerStats/player-stats.module',
    /* pages module */
    'pages/pages.module',
    /*domain module */
    'domain/domain.module',
    /* include vendor dependencies here */
    'angularCookies',
    'angularMessages',
    'uirouter',
    'lumx',
], function (ng) {
    'use strict';
    
    var app = ng.module('playersApp', [
        'ngCookies',
        'ui.router',
        //'templates',
        'lumx',
        'mockModule',
        'authModule',
        'loginModule',
        'navbarModule',
        'playerStatsModule',
        'pagesModule',
        'domainModule'
    ]);
    
    app.config(function ($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/login');
        
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'pages/login/login.html',
                controller: 'pages.loginController'
            })
            .state('login.register', {
                url: '/register',
                templateUrl: 'pages/login/partials/register.html'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'pages/home/players-list.html',
                controller: 'pages.playersListController',
                resolve: {
                    players: function (Players) {
                        return Players.get();
                    }
                }
            })
            .state('home.playerDetails', {
                url: '/playerDetails/:playerId',
                templateUrl: 'pages/home/player-stats.html',
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
    
    app.run(function ($rootScope) {
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
            $rootScope.$broadcast(toState.name, toParams);
        });
    });
    
    return app;
    
});