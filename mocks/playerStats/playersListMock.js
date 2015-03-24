define([
    'angular',
    'mockModule'
], function (ng, mockModule) {
    var players = [
        {
            name: 'Mahendra Singh Dhoni',
            img: '../img/dhoni.png',
            id: 1,
            batting: {
                tests: {
                    matches: 90,
                    innings: 144,
                    runs: 4876,
                    highestScore: 224,
                    average: 38.09
                },
                odis: {
                    matches: 261,
                    innings: 227,
                    runs: 8434,
                    highestScore: 183,
                    average: 52.38
                }
            },
            bowling: {
                tests: {
                    matches: 90,
                    innings: 7,
                    wickets: 0,
                    best: '-',
                    econ: 4.18
                },
                odis: {
                    matches: 261,
                    innings: 2,
                    wickets: 1,
                    best: '1/14',
                    econ: 5.16
                }
            }
        },
        {
            name: 'Virat Kohli',
            img: '../img/virat.png',
            id: 2,
            batting: {
                tests: {
                    matches: 33,
                    innings: 59,
                    runs: 2547,
                    highestScore: 169,
                    average: 46.3
                },
                odis: {
                    matches: 157,
                    innings: 149,
                    runs: 6536,
                    highestScore: 183,
                    average: 51.87
                }
            },
            bowling: {
                tests: {
                    matches: 33,
                    innings: 6,
                    wickets: 0,
                    best: '-',
                    econ: 2.91
                },
                odis: {
                    matches: 157,
                    innings: 40,
                    wickets: 4,
                    best: '1/15',
                    econ: 6.22
                }
            }
        },
        {
            name: 'Shikhar Dhawan',
            img: '../img/shikhar.png',
            id: 3,
            batting: {
                tests: {
                    matches: 13,
                    innings: 23,
                    runs: 823,
                    highestScore: 187,
                    average: 35.78
                },
                odis: {
                    matches: 60,
                    innings: 59,
                    runs: 2462,
                    highestScore: 137,
                    average: 43.96
                }
            },
            bowling: {
                tests: {
                    matches: 13,
                    innings: 3,
                    wickets: 0,
                    best: '-',
                    econ: 1.8
                },
                odis: {
                    matches: 60,
                    innings: '-',
                    wickets: '-',
                    best: '-',
                    econ: '-'
                }
            }
        },
        {
            name: 'Rohit Sharma',
            img: '../img/rohit.png',
            id: 4,
            batting: {
                tests: {
                    matches: 10,
                    innings: 18,
                    runs: 662,
                    highestScore: 177,
                    average: 41.37
                },
                odis: {
                    matches: 134,
                    innings: 128,
                    runs: 4186,
                    highestScore: 264,
                    average: 39.49
                }
            },
            bowling: {
                tests: {
                    matches: 10,
                    innings: 9,
                    wickets: 2,
                    best: '1/26',
                    econ: 3.6
                },
                odis: {
                    matches: 134,
                    innings: 37,
                    wickets: 8,
                    best: 2/27,
                    econ: 5.15
                }
            }
        },
        {
            name: 'Ajinkya Rahane',
            img: '../img/rahane.png',
            id: 5,
            batting: {
                tests: {
                    matches: 14,
                    innings: 27,
                    runs: 1077,
                    highestScore: 147,
                    average: 44.87
                },
                odis: {
                    matches: 53,
                    innings: 52,
                    runs: 1540,
                    highestScore: 111,
                    average: 30.8
                }
            },
            bowling: {
                tests: {
                    matches: 14,
                    innings: '-',
                    wickets: '-',
                    best: '-',
                    econ: '-'
                },
                odis: {
                    matches: 53,
                    innings: '-',
                    wickets: '-',
                    best: '-',
                    econ: '-'
                }
            }
        },
        {
            name: 'Suresh Raina',
            img: '../img/suresh.png',
            id: 6,
            batting: {
                tests: {
                    matches: 18,
                    innings: 31,
                    runs: 768,
                    highestScore: 120,
                    average: 26.48
                },
                odis: {
                    matches: 214,
                    innings: 183,
                    runs: 5381,
                    highestScore: 116,
                    average: 36.35
                }
            },
            bowling: {
                tests: {
                    matches: 18,
                    innings: 22,
                    wickets: 13,
                    best: '2/1',
                    econ: 3.47
                },
                odis: {
                    matches: 214,
                    innings: 91,
                    wickets: 32,
                    best: '3/34',
                    econ: 5.05
                }
            }
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