define(function () {
    'use strict';
    return /*@ngInject*/function ($scope, $state, $timeout, players) {
        
        $scope.players = players.data;
        
        $scope.showPlayerStats = function(playerId) {
            
            $state.transitionTo('home.playerDetails', {
                playerId: playerId
            });
            
        };
        
        $scope.$on('home.playerDetails', function (state, stateParams) {
            
            $timeout(function () {
                $scope.selectedPlayerId = stateParams.playerId;
            });
            
        });
    };
});