define([
    'angular',
    'domain/Players',
    'domain/User'
],  function(ng, Players, User) {
        'use strict';
        
        return ng.module('domainModule', [])
                 .service('Players', Players)
                 .service('User', User);
                 
    }
);