define(function () {
    'use strict';
    return function ($scope, $stateParams, playerDetails) {
        $scope.playerData = playerDetails.data;
    };
});