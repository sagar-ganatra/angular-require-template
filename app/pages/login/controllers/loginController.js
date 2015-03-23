define(function () {
    'use strict';
    
    return function ($scope, $state) {
        $scope.showHomePage = function() {
            $state.transitionTo('home');
        };
    };
});