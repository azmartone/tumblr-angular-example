(function() {
  var Blog, User, blog, oauth, user;

  Blog = require('tumblr');

  User = require('tumblr');

  oauth = {
    consumer_key: "so86sdKUYtC6W0hNylXxTcqt1SgvBKEAoBTsLBMJ3aHrtwcn4l",
    consumer_secret: "PuYFSUc5BgnSsTKnYAjBWzqWOW40bgZcgWH1ZRz8Wwq5o6sv0W",
    token: "lgn7jRTKiVdEQfLXTRYzZZZo7kcJ5ZantebovHLjCNvMfEUmwS",
    token_secret: "TqOx5UJCWFLQvKAd6fvLJkC34MMsS6TKUe8aBkOE4wV1Uwb9Bi"
  };

  blog = new Blog('blog.tumblr.com', oauth);

  blog.text({
    limit: 2
  }, function(error, response) {
    if (error) {
      throw new Error(error);
    }
    return console.log(response.posts);
  });

  user = new User(oauth);

  user.info(function(error, response) {
    if (error) {
      throw new Error(error);
    }
    return console.log(response.user);
  });

}).call(this);
