define([
    'angular',
    'mockModule'
], function (ng, mockModule) {
    
    mockModule.add('loginServiceMock', function ($httpBackend) {
        $httpBackend.whenPOST('/user/login')
                    .respond(function (method, url, data) {
            
            return [
                200,
                {}
            ];
            
        });
    });
    
});