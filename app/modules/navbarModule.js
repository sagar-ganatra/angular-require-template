define([
    'angular',
    'components/navbar/directives/navbarDirective'
],  function(ng, navbarDirective) {
        'use strict';
        
        return ng.module('navbarModule', [])
                 .directive('navbar', navbarDirective);
    }
);