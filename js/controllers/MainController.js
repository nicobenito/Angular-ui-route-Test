app.controller("MainController",['$scope','$location',function($scope,$location){
    $scope.items=[
        {
            path:'state1',
            title:'Home'
        },
        {
            path:'state2',
            title:'Other List'
        },
        {
            path:'youtube',
            title:'YouTube'
        },
        {
            path:'state3',
            title:'Filters'
        }
        ];
        $scope.isActive= function(item){
            if ("/"+item.path == $location.path()) {
            return true;
            }
            return false;
        };
}]);