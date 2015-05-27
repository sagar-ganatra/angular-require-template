define(function () {
    'use strict';
    
    return /*@ngInject*/function ($http, BACKEND_URLS) {
      
        this.playersList = [];
        
        this.get = function (playerId) {
            if (playerId) {
                return $http.get(BACKEND_URLS.players + '/' + parseInt(playerId, 10));
            }
            return $http.get('/players');
        };
    };
    
});
