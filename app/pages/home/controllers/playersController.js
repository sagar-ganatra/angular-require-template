define(function () {
    'use strict';
    return function ($scope, $state, players) {
        
        $scope.players = players.data;
        
        $scope.showPlayerStats = function(playerId) {
            $state.transitionTo('home.playerDetails', {
                playerId: playerId
            });
        };
    };
});