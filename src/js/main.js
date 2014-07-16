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
  }]).controller('MainController', ['$scope','tumblrService' , 'preloader', function($scope, tumblrService, preloader){

    $scope.posts = [];
    $scope.blog = null;
    $scope.imageLocations = [];



    var promise = tumblrService.getFoo();

    promise.then(function(greeting) {
        console.dir(greeting);

        var posts = greeting.posts;

        $.each(posts, function(){
            var post = this;

            if (post.type == "photo")
                $scope.imageLocations.push(post.photos[0].original_size.url);

        });

        preloader.preloadImages( $scope.imageLocations ).then(
            function handleResolve( imageLocations ) {

                // Loading was successful. 
                $scope.isLoading = false;
                $scope.isSuccessful = true;

                console.info( "Preload Successful" );

            },
            function handleReject( imageLocation ) {

                // Loading failed on at least one image.
                $scope.isLoading = false;
                $scope.isSuccessful = false;

                console.error( "Image Failed", imageLocation );
                console.info( "Preload Failure" );

            },
            function handleNotify( event ) {

                $scope.percentLoaded = event.percent;

                console.info( "Percent loaded:", event.percent );

            }
        );


        $scope.posts = greeting.posts;
      }, function(reason) {
        console.log('Failed: ' + reason);
      }, function(update) {
        console.log('Got notification: ' + update);
    });
    
  }]);