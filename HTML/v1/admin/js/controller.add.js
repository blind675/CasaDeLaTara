var controller = angular.module('casadelatara.controller.add', []);

  controller.controller('casadelatara.controller.add', ['$scope', 'GApi', '$state',
      function homeCtl($scope, GApi, $state) {
      	$scope.submitAddNewPost = function() {
      		GApi.executeAuth('casaDeLaTaraEndpoint', 'postPost', $scope.postObject).then(function(resp) {
              	alert(resp.data);
          	});
      	}
      }
  ]);