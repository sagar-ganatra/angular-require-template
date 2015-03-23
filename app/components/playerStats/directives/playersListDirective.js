define(function() {
    'use strict';
    
    return function () {
        return {
            restrict: 'AE',
            templateUrl: './components/playerStats/partials/playersList.html',
            controller: 'playersListController',
            scope: {
                onPlayerSelect: '&'
            }
        };
    };
});