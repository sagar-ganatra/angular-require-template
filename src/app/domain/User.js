define(function () {
    'use strict';
    
    return /*@ngInject*/function ($http) {
      
        this.userName = null;
        
        this.password = null;
        
        this.email = null;
        
        this.login = function () {
            return $http.post('/user/login', {
                userName: encodeURIComponent(this.userName),
                password: encodeURIComponent(this.password)
            });
        };
        
        this.register = function () {
            return $http.post('/user/register', {
                userName: encodeURIComponent(this.userName),
                password: encodeURIComponent(this.password),
                email: encodeURIComponent(this.email)
            });
        };
        
    };
    
});