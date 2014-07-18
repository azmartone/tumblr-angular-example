var angular = require('angular');

angular.module('AppAnimations', [])
    // .filter('interpolate', ['version', function(version) {
    //     return function(text) {
    //       return String(text).replace(/\%VERSION\%/mg, version);
    //     };
    // }]);
  // .animation('list-out', ['$window',function($window) {
  //   return {
  //     start : function(element, done) {
  //       console.log("AppAnimations.start list-out");
  //       TweenMax.set(element, {position:'relative'});

  //       var duration = 1; 
  //       //we can use onComplete:done with TweenMax, but lets use
  //       //a delay value for testing purposes
  //       TweenMax.to(element, 1, {opacity:0, width:0});
  //       $window.setTimeout(done, duration * 1000);
  //     }
  //   };
  // }])
  // .animation('list-in', ['$window',function($window) {
  //   return {
  //     setup: function(element) {
  //       console.log("AppAnimations.start list-in");
  //       TweenMax.set(element, {opacity:0, width:0});
  //     },
  //     start : function(element, done) {
  //       var duration = 1; 
  //       //we can use onComplete:done with TweenMax, but lets use
  //       //a delay value for testing purposes
  //       TweenMax.to(element, duration, {opacity:1, width:210});
  //       $window.setTimeout(done, duration * 1000);
  //     }
  //   };
  // }])
  // .animation('list-move', ['$window',function($window) {
  //   return {
  //     start : function(element, done) {
  //       console.log("AppAnimations.start list-move");
  //       var duration = 1; 
  //       //we can use onComplete:done with TweenMax, but lets use
  //       //a delay value for testing purposes
  //       TweenMax.to(element, duration, {opacity:1, width:210});
  //       $window.setTimeout(done, duration * 1000);
  //     }
  //   };
  // }]);

.animation('.swagger', function() {

  return {
    //call done when the animation is over
    setup: function(element) {
        TweenMax.set(element, {opacity:0, width:0});
    },
    enter : function(element, done) {
        var duration = 1; 
        //we can use onComplete:done with TweenMax, but lets use
        //a delay value for testing purposes
        TweenMax.to(element, duration, {opacity:1, width:210});
        $window.setTimeout(done, duration * 1000);
    },

    //leave and move are the same as enter
    leave : function(element, done) {

        TweenMax.set(element, {position:'relative'});

        var duration = 1; 
        //we can use onComplete:done with TweenMax, but lets use
        //a delay value for testing purposes
        TweenMax.to(element, 1, {opacity:0, width:0});
        $window.setTimeout(done, duration * 1000);

    },
    move : function(element, done) {
        var duration = 1; 
        //we can use onComplete:done with TweenMax, but lets use
        //a delay value for testing purposes
        TweenMax.to(element, duration, {opacity:1, width:210});
        $window.setTimeout(done, duration * 1000);
    }

    // //this is called BEFORE the class is added
    // beforeAddClass : function(element, className, done) {
    //   //...
    // },

    // //this is called AFTER the class is added
    // addClass : function(element, className, done) {
    //   if(className == 'hide') {
    //     runTheHideAnimation(element, done);
    //   }
    //   else {
    //     runTheAnimation(element, done);
    //   }

    //   return function onEnd(element, done) { };
    // },

    // //this is called BEFORE the class is removed
    // beforeRemoveClass : function(element, className, done) {
    //   //...
    // },

    // //this is called AFTER the class is removed
    // removeClass : function(element, className, done) {
    //   if(className == 'hide') {
    //     runTheShowAnimation(element, done);
    //   }
    //   else {
    //     runTheAnimation(element, done);
    //   }

    //   return function onEnd(element, done) { };
    // },

    // /* this is called to ask if the current animation can be
    //    disabled given the new animation className. This callback
    //    is entirely optional and is called on each animation callback */
    // allowCancel : function(element, event, className) {
      
    // } 
  };
});