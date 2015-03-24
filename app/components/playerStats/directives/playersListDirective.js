define(function() {
    'use strict';
    
    return function () {
        return {
            restrict: 'AE',
            templateUrl: './components/playerStats/partials/playersList.html',
            scope: {
                onPlayerSelect: '&',
                players: '=',
                selectedPlayer: '='
            },
            link: function (scope, element, attrs) {
                console.log(scope.selectedPlayer);
                
                /*scope.$watch(scope.selectedPlayer, function (newValue, oldValue) {
                    console.log(newValue);
                });*/
                
                attrs.$observe(attrs.selectedPlayer, function (value) {
                    console.log(value);
                });
                
            }
        };
    };
});