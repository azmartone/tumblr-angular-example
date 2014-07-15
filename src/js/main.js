// This will include ./node_modules/angular/angular.js
// and give us access to the `angular` global object.


var angular = require('angular');
require('angular-route');
require('./services');
require('./filters');

//then include them into your app
angular.module('myApp', ['ngRoute', 'myApp.services', 'myApp.filters'])
  .config(['$routeProvider', function($routeProvider) {
    // $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html'});
    // $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html'});
    // $routeProvider.otherwise({redirectTo: '/view1'});
  }])
  .controller('mainController', ['$scope', function($scope){
    //Grab the tumblr posts

    //

    $scope.posts = [];
  }]);


/* Tumblr API Stuff */