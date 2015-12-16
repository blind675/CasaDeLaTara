var app = angular.module('casaDeLaTara', [

  'angular-google-gapi'

]);

app.run(['GAuth', 'GApi',
  function(GAuth, GApi) {

//    if ($window.location.hostname == 'localhost') {
//      BASE = '//localhost:8080/_ah/api';
//    } else {
      BASE = 'https://genuine-axle-114721.appspot.com';
//    }

    GApi.load('casaDeLaTaraEndpoint', 'v1', BASE);
    GAuth.setScope('https://www.googleapis.com/auth/userinfo.email');
  }
]);