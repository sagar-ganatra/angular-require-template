define([
    'angular',
    'components/playerStats/controllers/playersListController',
    'components/playerStats/controllers/playersDetailController',
    'components/playerStats/directives/playersListDirective',
    'components/playerStats/directives/playersDetailDirective',
    'domain/Players'
],  function(ng, playersListController, playersDetailController, playersListDirective, playersDetailDirective, Players) {
        'use strict';
        
        return ng.module('playerStatsModule', [])
                 .directive('playersList', playersListDirective)
                 .directive('playersDetail', playersDetailDirective) 
                 .controller('playersListController', playersListController)
                 .controller('playersDetailController', playersDetailController)
                 .service('Players', Players);
                 
    }
);