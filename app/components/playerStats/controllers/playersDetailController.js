define(function () {
    'use strict';
    
    return function ($scope, Players) {
        
        Players.get($scope.playerId).then(function (response) {
            $scope.player = response.data;
        });
    };
});