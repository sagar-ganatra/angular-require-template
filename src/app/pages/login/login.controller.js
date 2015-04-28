define(function () {
    'use strict';
    
    
    return /*@ngInject*/function ($scope, $state, User) {
        $scope.user = User;
        
        $scope.onLogin = function (userName, password) {
            $scope.user.userName = userName;
            $scope.user.password = password;
            $scope.user.login($scope.userName, $scope.password).then(function () {
               $state.transitionTo('home');
            });
        };
    };
});