define([
    'angular',
    'services/backendUrlServiceProvider'
],  function (ng, backendUrlServiceProvider) {
    'use strict';

    return ng.module('commonServices', [])
                 .constant('BACKEND_URLS', backendUrlServiceProvider);
});
