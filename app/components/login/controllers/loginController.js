define(function () {
    'use strict';
    
    return function ($scope, $state, User) {
        $scope.userName = '';
        $scope.password = '';
        $scope.user = User;
        
        $scope.login = function () {
            if($scope.user.userName && $scope.user.password) {
                $scope.user.login($scope.userName, $scope.password).then(function (response) {
                    $scope.loginSuccessful({
                        response: response
                    });
                });
            }
        };
    };
});