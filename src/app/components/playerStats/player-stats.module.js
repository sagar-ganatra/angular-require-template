define([
    'angular',
    'components/playerStats/players-list.directive',
    'components/playerStats/players-detail.directive'
],  function(ng, playersListDirective, playersDetailDirective) {
        'use strict';
        
        return ng.module('playerStatsModule', [])
                 .directive('playersList', playersListDirective)
                 .directive('playersDetail', playersDetailDirective);
                 
    }
);