define(function () {
    'use strict';
    
    return function ($http) {
      
        this.playersList = [];
        
        this.get = function (playerId) {
            if(playerId) {
                return $http.get('/players/' + parseInt(playerId, 10));
            }
            return $http.get('/players');
        };
    };
    
});