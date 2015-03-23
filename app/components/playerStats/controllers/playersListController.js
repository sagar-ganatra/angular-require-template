define(function () {
    'use strict';
    
    return function ($scope, $state, Players) {
        
        $scope.players = [];
        
        Players.get().then(function (response) {
            $scope.players = response.data;
        });
    };
});