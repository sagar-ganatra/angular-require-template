define(function () {
    'use strict';
    return /*@ngInject*/function ($scope, $stateParams, playerDetails) {
        $scope.playerData = playerDetails.data;
    };
});