define(function () {
    'use strict';
    
    return function () {
        return {
            restrict: 'AE',
            templateUrl: './components/login/login.html',
            scope: {
                onLogin: '&'
            },
            link: function (scope) {
                scope.userName = '';
                scope.password = '';
                
                scope.onLogin = function () {
                    if(scope.userName && scope.password) {
                        scope.$parent.onLogin(scope.userName, scope.password);
                    }
                };
            }
        };
    };
});