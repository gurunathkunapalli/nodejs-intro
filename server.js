/*
 *
 * This re-implements the same server to use the popular express module.
 *
 * To make this work in this repo, you can run 
 *
 * $ npm install
 *
 * In your own project, run
 *
 * $ npm install express --save
 *
 * To actually run the app, you'll still use:
 * 
 * $ node server.js
 *
 * A web page will appear at 127.0.0.1:1337, and it will say "Hello World"
 *
 * Notice how much easier and clearer this code is. This also shows a bit of node philosophy. Node Core is intentionally minimal. Developers can implement improved versions, and fight it out on NPM. All node apps end up being stacks of dependency trees, composed of tiny modules loosely connected.
 * 
 */


var http = require('http');
var url = require('url');
var express = require("express");
var app = express();

app.get('/', function(req, res) {
  res.send("Hello World");
});

app.get('/data.xml', function(req, res) {
  res.setHeader("content-type", "text/xml");
  var requestUrl = url.parse("http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml");
  var opts = {
    "host": requestUrl.host,
    "path": requestUrl.path,
    "headers": {
      "Content-Type": "text/xml"
    }
  };
  console.log(JSON.stringify(opts));
  http.get(opts, function(getRes) {
    getRes.setEncoding("utf8");
    var resData = "";
    getRes.on('data', function(chunk) {
      return resData += chunk;
    }).on("end", function() {
      res.send(resData);
    });
  });
});

console.log("Server running at http://127.0.0.1:1337/");

app.listen(1337);