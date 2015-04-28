define([
    'angular',
    'angularMocks'
], function (ng) {

    var mockModule = ng.module('mockModule', ['ngMockE2E']);
    
    mockModule.run(['$httpBackend', function ($httpBackend) {
        $httpBackend.whenGET(/js$/).passThrough();
        $httpBackend.whenGET(/html$/).passThrough();
    }]);
    
    mockModule.add = function (name, fn) {
        mockModule.run([
            '$httpBackend',
            function ($appBackend) {
                mockModule[name] = function () {
                    //var $httpBackend = $testBackend || $appBackend;
                    fn($appBackend);
                };
                
                mockModule[name]();
            }
        ]);
    };
    
    return mockModule;

});