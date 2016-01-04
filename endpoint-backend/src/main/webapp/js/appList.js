
function init() {
  window.init();
}

angular.module('casaDeLaTara', [])
    .controller('casadelataraController', ['$scope', '$window', function($scope, $window) {

    $window.init = function() {
      $scope.$apply($scope.load_casaDeLaTara_lib);
    };

    $scope.load_casaDeLaTara_lib = function() {

      var apiName = 'casaDeLaTaraEndpoint';
      var apiVersion = 'v1';

      // this page is on the google app engine server if page changes change url
      var apiRoot = 'https://' + window.location.host + '/_ah/api';

      if (window.location.hostname == 'localhost' || window.location.hostname == '127.0.0.1') {
          // We're probably running against the DevAppServer
          apiRoot = 'http://' + window.location.host + '/_ah/api';
      }

      var callback = function() {
            $scope.is_backend_ready = true;
            $scope.listPosts()
      }

      gapi.client.load(apiName, apiVersion, callback, apiRoot);
    };

    $scope.listPosts = function() {
      gapi.client.casaDeLaTaraEndpoint.getPosts().execute(function(resp) {

        $scope.posts = resp.postsList;
        console.log(resp);

        $scope.$apply();
      });
    }

    $scope.deletePost = function(post) {
          gapi.client.casaDeLaTaraEndpoint.deletePost(post).execute(function(resp) {

            console.log(resp);

            if (resp.statusCode == 0) {
                var index = $scope.posts.indexOf(post);
                 $scope.posts.splice(index, 1);
            } else {
                $window.alert("A aparut o problema. Mai incearca o data si daca nu merge suna-l pe nepotu. 0745071490");
            }

            $scope.$apply();
      });
    }

 }]);
