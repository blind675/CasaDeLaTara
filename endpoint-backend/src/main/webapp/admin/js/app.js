function init() {
  window.init();
}

angular.module('casaDeLaTara', [
    'ngRoute',
    'casaDeLaTaraController'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
      when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'casaDeLaTaraListCtrl'
      }).
      when('/add', {
        templateUrl: 'partials/add.html',
        controller: 'casaDeLaTaraAddCtrl'
      }).
      otherwise({
        redirectTo: '/list'
      });
    }
  ])

.controller('casaDeLaTaraControllerInit', ['$scope', '$window', function($scope, $window) {

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

      console.log("Endpoint loaded.")
      $scope.$apply();
    }

    gapi.client.load(apiName, apiVersion, callback, apiRoot);
  };

}]);