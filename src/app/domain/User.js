define(function () {
    'use strict';
    
    return /*@ngInject*/function ($http, BACKEND_URLS) {
      
        this.userName = null;
        
        this.password = null;
        
        this.email = null;
        
        this.login = function () {
            return $http.post(BACKEND_URLS.login, {
                userName: encodeURIComponent(this.userName),
                password: encodeURIComponent(this.password)
            });
        };
        
        this.register = function () {
            return $http.post(BACKEND_URLS.register, {
                userName: encodeURIComponent(this.userName),
                password: encodeURIComponent(this.password),
                email: encodeURIComponent(this.email)
            });
        };
        
    };
    
});
