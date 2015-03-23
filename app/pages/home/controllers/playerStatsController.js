define(function () {
    'use strict';
    return function ($scope, $stateParams) {
        $scope.playerId = $stateParams.playerId;
    };
});