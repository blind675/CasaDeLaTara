app.controller('casadelatara.controller.list', ['$scope', 'GApi', function($scope, GApi) {

  $scope.loadAllPosts = function() {

    GApi.execute('casaDeLaTaraEndpoint', 'getPosts').then(function(resp) {
      $scope.posts = resp.postsList;
//      console.log(resp);
    }, function() {
      console.log("error :(");
    });
  }

  $scope.deletePost = function(post) {
          console.log(post);
  }

}]);