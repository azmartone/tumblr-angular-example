# tumblr = require 'tumblr' 

# oauth =
#   consumer_key: "G30nEYzGgbBjQG6GDtkUHPXSBEY4TuoEKhGfENEeQUgpUxu6ih"
#   consumer_secret: "QJIb9hDycv6XFh3qRZdY8DzWIJ8Vo1JdLWNpqaC1V8qrY1kmju"
#   token: "NCwbMrEKpKLm50ED2HwZ9CFsDYlPhaj4Y0brWTar8JhGHoGu96"
#   token_secret: "j2r6TlRxUDG7DG6Q2spK22LiM5kzG93u9LAZRDz3N4P2DwT3TA"

# blog = new tumblr.Blog 'trailerparklabs.tumblr.com', oauth

# blog.text limit: 2, (error, response) ->
#   throw new Error error if error
#   console.log response.posts

# user = new tumblr.User oauth

# user.info (error, response) ->
#   throw new Error error if error
#   console.log response.user


# Authenticate via OAuth

tumblr = require("tumblr.js")


console.log "tumblr", tumblr

client = tumblr.createClient(
  consumer_key: "G30nEYzGgbBjQG6GDtkUHPXSBEY4TuoEKhGfENEeQUgpUxu6ih"
  consumer_secret: "QJIb9hDycv6XFh3qRZdY8DzWIJ8Vo1JdLWNpqaC1V8qrY1kmju"
  token: "NCwbMrEKpKLm50ED2HwZ9CFsDYlPhaj4Y0brWTar8JhGHoGu96"
  token_secret: "j2r6TlRxUDG7DG6Q2spK22LiM5kzG93u9LAZRDz3N4P2DwT3TA"
)

# # Make the request
# client.userInfo (err, data) ->


# # ...