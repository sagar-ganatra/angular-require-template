define([
    'angular',
    'components/navbar/navbar.directive'
],  function(ng, navbarDirective) {
        'use strict';
        
        return ng.module('navbarModule', [])
                 .directive('navbar', navbarDirective);
    }
);