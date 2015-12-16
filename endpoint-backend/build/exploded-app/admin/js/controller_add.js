app.controller('casadelatara.controller.add', ['$scope', 'GApi', function($scope, GApi) {

  $scope.submitAddNewPost = function() {
    $scope.postObject.imageURL = "efe";
    GApi.execute('casaDeLaTaraEndpoint', 'postPost', $scope.postObject).then(function(resp) {
      if (resp.statusCode === 1) {
        $scope.postObject = {}
      }
    }, function() {
      console.log("error :(");
    });
  }
}]);