app.factory('youTubeVideos',['$http',function($http){
    return $http.get('data/videos.json')
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });
}]);