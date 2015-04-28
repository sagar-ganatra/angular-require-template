define(function() {
    'use strict';
    
    return function () {
        return {
            restrict: 'AE',
            templateUrl: './components/playerStats/players-list.html',
            scope: {
                onPlayerSelect: '&',
                players: '=',
                selectedPlayer: '='
            }
        };
    };
});