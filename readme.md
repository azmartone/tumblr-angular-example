#Tumblr API Starter Project

####Description

A simple starter project using grunt. Forked from https://github.com/pr1ntr/starter. 

It includes the tumblr.js module that allows you to access tumblr post data. Please change the API Keys accordingly.


####Features
* CSS is compile from stylus. Minified for disitribution
    * creates a source css file
    * creates a vendor css file
* JS is concatinated and minified for distribution
    * creates a source js file
    * creates a vendor js file
* HTML uses an EJS template to input server and build specific variables from package.json (e.g., cdn_url path)
* Optimizes images for distribution
* Uses bower for front-end library management along with grunt integration.




####Initialization
* npm install
* bower install


####Commands

* grunt setup - runs all necessary tasks to build the app and then runs the dev task
* grunt deploy - runs all necessary tasks to build the app and then builds a distribution

* grunt or grunt dev - Build for development in /dev and run watch on working files. Also runs test server on port 3001
* grunt dist - Build for production in /dist
* grunt dist:test - Build for production and run test server on port 3001

Tumblr API

OAuth Consumer Key:
so86sdKUYtC6W0hNylXxTcqt1SgvBKEAoBTsLBMJ3aHrtwcn4l



####Tumblr

* Testing
    * Copy the dist/index.html or dev/index.html to the "Edit Theme" section of your tumblr dashboard.
    * After doing so, you will see a input field labeled "JS CSS File Path". You can input the local file path in this field to create a hybrid cloud/local dev environment.
    * You may prefer to enter in an AWS path or Dropbox path depending on where you want to host these JS/CSS files.
    
* Dropbox Hosting
* You can also try some cool grunt-contrib-copy settings to update a dropbox folder whenever you run "grunt dev".
<pre><code>
copy: {
    dev: {
        files: [
            {
                expand:true,
                cwd: "src/images/",
                src: ["**"],
                dest: "dev/images/",
                filter: 'isFile'
            },
            {
                expand:true,
                cwd: "dev/css/",
                src: ["**"],
                dest: "/Users/danny.duong/Dropbox/tp/projects/awat/css",
                filter: 'isFile'
            },
            {
                expand:true,
                cwd: "dev/js/",
                src: ["**"],
                dest: "/Users/danny.duong/Dropbox/tp/projects/awat/js",
                filter: 'isFile'
            }

        ]
    }
}
</code></pre>