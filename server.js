/*
 *
 * Eventually, we're going to want to cut our app up into pieces. This will also serve to explain how node module includes work.
 *
 * We replaced our handler for /data.xml with a require of a new file, rss-proxy.js.
 *
 * Note that we require the module, and call it like a function, passing it the app object. 
 *
 * When we require a module, we are guaranteed that one thing will come back. It could be anything, a string, a number, an array, a regex, any JavaScript value. Most of the time, we'll expect a function or an object to instanciate. In this case, we expect to receive a function that takes one argument, the express app.
 *
 * Open rss-proxy.js to see the other end of this.
 * 
 */


var express = require("express");
var app = express();

app.get('/', function(req, res) {
  res.send("Hello World");
});

require("./rss-proxy.js")(app);

console.log("Server running at http://127.0.0.1:1337/");

app.listen(1337);