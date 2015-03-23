define([
    'angular',
    'components/auth/services/authService',
    'components/auth/services/cookieService',
],  function(ng, authService, cookieService) {
        'use strict';
        
        return ng.module('authModule', [])
                 .service('authService', authService)
                 .service('authCookieService', cookieService);
    }
);