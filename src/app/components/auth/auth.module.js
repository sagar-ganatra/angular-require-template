define([
    'angular',
    'components/auth/auth.service',
    'components/auth/auth-cookie.service',
],  function(ng, authService, cookieService) {
        'use strict';
        
        return ng.module('authModule', [])
                 .service('authService', authService)
                 .service('authCookieService', cookieService);
    }
);