# Authenticate via API Key
tumblr = require("tumblr.js")
client = tumblr.createClient(consumer_key: "G30nEYzGgbBjQG6GDtkUHPXSBEY4TuoEKhGfENEeQUgpUxu6ih")

# Make the request
client.posts "dduong-tp.tumblr.com",
  limit: 50
  reblog_info: true
  notes_info: true
  filter: "raw"
, (data, err) ->
    console.log "data", data, "err", err