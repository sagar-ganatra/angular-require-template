define(function () {
    'use strict';
    return function ($scope, $state) {
        $scope.showPlayerStats = function(playerId) {
            $state.transitionTo('home.playerDetails', {
                playerId: playerId
            });
        };
    };
});