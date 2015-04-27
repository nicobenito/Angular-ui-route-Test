var app = angular.module('appOne', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/state1");
    
    $stateProvider
        .state('state1',{
            url:"/state1",
            templateUrl:"views/partials/state1.html"
        })
        .state('state1.list',{
            url:"/list",
            templateUrl:"views/partials/state1.list.html",
            controller:function($scope){
                $scope.items=["Lamp", "Table", "Tv", "Chair"];
            }
        })
        .state('state2', {
            url: "/state2",
             templateUrl: "views/partials/state2.html"
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "views/partials/state2.list.html",
            controller: function($scope) {
                $scope.things = ["Ball", "Computer", "Glass", "Bottle"];
            }
        })
        .state('youtube',{
            url:"youtube",
            templateUrl:"views/youtube.html",
            controller:"YouTubeController"
        })
        .state('state3',{
            url:"/state3",
            templateUrl:"views/partials/state3.html"
        })
        .state('state3.filter1',{
            url:"/filter1",
            templateUrl:"views/partials/state3.filter1.html"
        })
        .state('state3.filter2',{
            url:"/filter2",
            templateUrl:"views/partials/state3.filter2.html",
            controller:function($scope){
                $scope.animals=[
                    {
                        name:"Javan rhinoceros",
                        state:"ex"
                    },
                    {
                        name:"Turtle",
                        state:"sv"
                    },
                    {
                        name:"Snow leopard",
                        state:"ex"
                    },
                    {
                        name:"Wolf",
                        state:"sv"
                    },
                    {
                        name:"Eagle",
                        state:"sv"
                    },
                    {
                        name:"Asian elephant",
                        state:"ex"
                    },
                    {
                        name:"Cat",
                        state:"sv"
                    },
                    {
                        name:"Mountain gorilla",
                        state:"ex"
                    }
                    ];
            }
        });
});