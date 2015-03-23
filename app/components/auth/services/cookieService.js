define(function () {
    'use strict';
    
    return function ($cookies) {
        
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