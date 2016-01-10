angular.module('casaDeLaTaraController', ['cloudinary','ngFileUpload'])

.controller('casaDeLaTaraListCtrl', ['$scope', function($scope) {

  $scope.loadAllPosts = function() {
    gapi.client.casaDeLaTaraEndpoint.getPosts().execute(function(resp) {

      $scope.posts = resp.postsList;
      console.log(resp);

      $scope.$apply();
    });
  };

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

}])

.controller('casaDeLaTaraAddCtrl', ['$scope', '$rootScope', '$routeParams', '$location', 'Upload'
, function($scope, $rootScope, $routeParams, $location, $upload) {

  $scope.postObject = {};

  $scope.submitAddNewPost = function() {

    gapi.client.casaDeLaTaraEndpoint.postPost($scope.postObject).execute(function(resp) {

      if (resp.statusCode == 0) {
        console.log(resp);
        $scope.postObject = null;
      } else {
        $window.alert("A aparut o problema. Mai incearca o data si daca nu merge suna-l pe nepotu. 0745071490");
      }

      $scope.$apply();
    });
  }

  $scope.uploadFiles = function(file){
        var d = new Date();
        var title = "Image (" + d.getDate() + " - " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ")";
        $scope.file = file;
        if (!$scope.file) return;

            file.upload = $upload.upload({
              url: "https://api.cloudinary.com/v1_1/" + $.cloudinary.config().cloud_name + "/upload",
              fields: {
                upload_preset: $.cloudinary.config().upload_preset,
                tags: 'myphotoalbum',
                context: 'photo=' + title
              },
              file: file
            }).progress(function (e) {
              file.progress = Math.round((e.loaded * 100.0) / e.total);
              file.status = "Uploading... " + file.progress + "%";

            }).success(function (data, status, headers, config) {
              console.log("Upload success")

              $scope.postObject.imageURL = data.secure_url

            }).error(function (data, status, headers, config) {
              console.log("Upload fail")
              console.log("Data: " + data)
              console.log("Status: " + status)
              console.log("Headers: " + headers)
              console.log("Config: " + config)
            });

      };
}]);