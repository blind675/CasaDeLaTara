 app = angular.module('casaDeLaTara', [

   'angular-google-gapi'

 ]);

app.run(['GAuth', 'GApi',
    function(GAuth, GApi) {

        var CLIENT = '459220400893-t730do3e9330csr99s3d4gi9886ufuee.apps.googleusercontent.com';
        var BASE = 'https://localhost:8080/_ah/api';

    GApi.load('casaDeLaTaraEndpoint','v1',BASE);

        GAuth.setClient(CLIENT);
        GAuth.setScope('https://www.googleapis.com/auth/userinfo.email');
//        GAuth.checkAuth().then(
//            function (resp) {
//            console.log(resp);
////                $state.go('webapp.home'); // an example of action if it's possible to
//                              // authenticate user at startup of the application
//            },
//            function( resp) {
//            console.log(resp);
////        $state.go('login');       // an example of action if it's impossible to
//                      // authenticate user at startup of the application
//            }
//        );

    }]);

//app.run(['GApi', 'GAuth',
//    function(GApi, GAuth) {
//    console.log("1");
//        var BASE = '//localhost:8080/_ah/api';
////        var CLIENT =
//console.log("2");
//        GApi.load('casaDeLaTaraEndpoint','v1',BASE);
////        GAuth.setClient(CLIENT);
//console.log("3");
//        GAuth.setScope("https://www.googleapis.com/auth/userinfo.email"); // default scope is only https://www.googleapis.com/auth/userinfo.email
//console.log("4");
//    }
//]);

app.controller('casadelatara.controller.add', ['$scope', 'GApi', function ($scope, GApi) {

    console.log("6");
    $scope.submitAddNewPost = function() {
    $scope.postObject.imageUrl = "efe";
    GApi.execute('casaDeLaTaraEndpoint', 'postPost', $scope.postObject).then( function(resp) {
        $scope.value = resp;
    }, function() {
        console.log("error :(");
    });
    }
    }
]);