define([
    'angular',
    'pages/home/controllers/playersController',
    'pages/home/controllers/playerStatsController',
    'pages/login/controllers/loginController'
],  function(ng, playersController, playerStatsController, loginController) {
        'use strict';
        
        return ng.module('pagesModule', [])
                 .controller('pages.playersController', playersController)
                 .controller('pages.playerStatsController', playerStatsController)
                 .controller('pages.loginController', loginController);
    }
);