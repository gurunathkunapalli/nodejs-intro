/*
 *
 * A real website has real pages. In this iteration, I've added the jade templating engine, and told express to use it for views.
 *
 * This means I can say res.render(index, data), and express knows I mean index.jade in the views folder. You can use other template engines like ejs or rust as well.
 *
 * We've also told express to use jade to look for static resources like js and css in the "public" directory. That means I can cas for /styles.css, and express will find the file in public/styles.css
 * 
 */

var path = require("path");
var jade = require("jade");
var express = require("express");
var app = express();

app.set('view engine', 'jade');

app.set('view options', {
  layout: false
});

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res) {
  var data = {
    messageText: "Hello, world"
  };
  res.render("index", data);
});

require("./rss-proxy.js")(app);

console.log("Server running at http://127.0.0.1:1337/");

app.listen(1337);