# # Authenticate via API Key
# tumblr = require("tumblr.js")
# client = tumblr.createClient(consumer_key: "G30nEYzGgbBjQG6GDtkUHPXSBEY4TuoEKhGfENEeQUgpUxu6ih")

# # Make the request
# client.posts "dduong-tp.tumblr.com",
#   limit: 50
#   reblog_info: true
#   notes_info: true
#   filter: "raw"
# , (data, err) ->
#     console.log "data", data, "err", err



# This will include ./node_modules/angular/angular.js
# and give us access to the `angular` global object.
require "angular"
require "angular-route"

# Create your app
angular.module("myApp", ["ngRoute"]).config [
  "$routeProvider"
  ($routeProvider) ->
    
    # Specify routes to load our partials upon the given URLs
    $routeProvider.when "/view1",
      templateUrl: "partials/partial1.html"

    $routeProvider.when "/view2",
      templateUrl: "partials/partial2.html"

    $routeProvider.otherwise redirectTo: "/view1"
]