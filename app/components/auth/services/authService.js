define(function () {
    'use strict';

    return function (authCookieService) {
        
        this.isAuthenticated = function () {
            return !!authCookieService.get('sessionKey');
        };
    };

});