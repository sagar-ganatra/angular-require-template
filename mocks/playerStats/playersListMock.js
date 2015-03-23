define([
    'angular',
    'mockModule'
], function (ng, mockModule) {
    var players = [
        {
            name: 'Mahendra Singh Dhoni',
            img: '../img/dhoni.png',
            id: 1
        },
        {
            name: 'Virat Kohli',
            img: '../img/virat.png',
            id: 2
        },
        {
            name: 'Shikhar Dhawan',
            img: '../img/shikhar.png',
            id: 3
        },
        {
            name: 'Rohit Sharma',
            img: '../img/rohit.png',
            id: 4
        },
        {
            name: 'Ajinkya Rahane',
            img: '../img/rahane.png',
            id: 5
        }
        
    ];
    
    mockModule.add('playersListServiceMock', function ($httpBackend) {
        $httpBackend.whenGET('/players')
                    .respond(function (method, url, data) {
            
            return [
                200,
                players
            ];
            
        });
    });
    
    mockModule.add('playersDetailsServiceMock', function ($httpBackend) {
        $httpBackend.whenGET(new RegExp('/players/[0-9]*', ''))
                    .respond(function (method, url, data) {
            
            var id = parseInt(url.split('/')[2], 10);
            return [
                200,
                players.filter(function(element) {
                    return element.id === id;
                })[0]
            ];
            
        });    
    });
    
});