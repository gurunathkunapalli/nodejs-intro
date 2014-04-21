/*
 *
 * Re-implemented, with a new dependency, request.
 *
 * MUCH simpler. Once more, we have a complicated core method that focuses on completeness, simplified with a layered module implementing the underlying techniques more simply.
 *
 * No chunks, no parsed urls, just a request piped to the response.
 * 
 */


var request = require("request");
var express = require("express");
var app = express();

app.get('/', function(req, res) {
  res.send("Hello World");
});

app.get('/data.xml', function(req, res) {
  var requestUrl = "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml";
  res.setHeader("content-type", "text/xml");
  request(requestUrl).pipe(res);
});

console.log("Server running at http://127.0.0.1:1337/");

app.listen(1337);