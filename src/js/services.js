var angular = require('angular');
var tumblr = require('tumblr.js');


angular.module('myApp.services', [])
    .value('version', '0.1')
    .factory('tumblrService', ['$q', function($q) {

        var client = tumblr.createClient({consumer_key: "G30nEYzGgbBjQG6GDtkUHPXSBEY4TuoEKhGfENEeQUgpUxu6ih"});

        return {
            getFoo: function(callback) {
                var deferred = $q.defer();

                client.posts("dduong-tp.tumblr.com", {

                    limit: 50,
                    reblog_info: true,
                    notes_info: true,
                    filter: "raw"         
                }, function(data, err) {
                    if (err == "success")
                        deferred.resolve(data.response);
                    else
                        deferred.reject("err:" + err);
                
                });

                return deferred.promise;
            }
        };
    }]);
