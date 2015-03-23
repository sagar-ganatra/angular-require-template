define(function() {
    'use strict';
    
    return function () {
        return {
            restrict: 'AE',
            templateUrl: './components/playerStats/partials/playersDetail.html',
            controller: 'playersDetailController',
            scope: {
                playerId: '@'
            }
        };
    };
});