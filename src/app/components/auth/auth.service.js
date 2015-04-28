define(function () {
    'use strict';

    
    return /*@ngInject*/function (authCookieService) {
        
        this.isAuthenticated = function () {
            return !!authCookieService.get('sessionKey');
        };
    };

});