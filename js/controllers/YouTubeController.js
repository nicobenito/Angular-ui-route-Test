app.controller("YouTubeController",['$scope','$sce','$document','youTubeVideos',function($scope,$sce,$document,youTubeVideos){
    $scope.video=[];
    $scope.newVideo={
        link:'',
        title:''
    };
    $scope.videoSrc={
        link:'http://www.youtube.com/embed/jTt5MglRGUQ',
        title:'Billy Joel-Tokyo, Japan, Live'
    };
    $scope.currentVideo = $sce.trustAsResourceUrl($scope.videoSrc.link);
    youTubeVideos.success(function(data){
        $scope.videos=data;
    });
        $scope.videoSelected=function(num){
            $scope.videoSrc=$scope.videos[num];
            $scope.currentVideo = $sce.trustAsResourceUrl($scope.videoSrc.link);
            //$scope.resfeshIframe();
        };
        $scope.resfeshIframe = function() { 
        var iframe = document.getElementById('theiframe');
        iframe.src = iframe.src;
        };
        $scope.uploadVideo=function(){ 
            $scope.videos.push({
                link:$scope.newVideo.link,
                title:$scope.newVideo.title
                
            });
            $scope.newVideo.link='';
            $scope.newVideo.title='';
        };
}]);