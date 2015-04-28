define(function() {
    'use strict';
    
    return function () {
        return {
            restrict: 'AE',
            templateUrl: './components/playerStats/players-detail.html',
            scope: {
                playerData: '='
            }
        };
    };
});