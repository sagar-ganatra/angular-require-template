define(function () {
    'use strict';
    
    return /*@ngInject*/function ($cookies) {
        
        this.save = function (key, data) {
            $cookies[key] = data;
        };
        
        this.get = function (key) {
            return $cookies[key];
        };
        
        this.remove = function (key) {
            $cookies[key] = '';
        };
    };

});