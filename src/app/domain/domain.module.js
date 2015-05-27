define([
    'angular',
    'domain/Players',
    'domain/User',
    'services/common-services.module'
],  function (ng, Players, User) {
    'use strict';
        
    return ng.module('domainModule', ['commonServices'])
             .service('Players', Players)
             .service('User', User);
                 
});
