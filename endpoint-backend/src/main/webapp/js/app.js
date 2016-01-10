function init() {
  window.init();
}

angular.module('casaDeLaTaraClient', []).controller('casaDeLaTaraClientController', ['$scope', '$window', function($scope, $window) {

  var loadAllPosts = function() {
    gapi.client.casaDeLaTaraEndpoint.getPosts().execute(function(resp) {

      $scope.items = resp.postsList;
      console.log(resp);

      $scope.$apply();
    });
  };

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

      console.log("Endpoint loaded.");
      loadAllPosts();
    }

    gapi.client.load(apiName, apiVersion, callback, apiRoot);
  };

}]);