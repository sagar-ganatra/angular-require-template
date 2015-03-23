define([
    'angular',
    'components/playerStats/directives/playersListDirective',
    'components/playerStats/directives/playersDetailDirective',
    'domain/Players'
],  function(ng, playersListDirective, playersDetailDirective, Players) {
        'use strict';
        
        return ng.module('playerStatsModule', [])
                 .directive('playersList', playersListDirective)
                 .directive('playersDetail', playersDetailDirective) 
                 .service('Players', Players);
                 
    }
);