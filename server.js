/*
 *
 * Implemented a new path, /data.xml that proxies a request for the homepage xml file.
 *
 * This looks weird and complicated and it is.
 * 
 * Notice that we have to parse the url we want into host and path using the built-in url module.
 *
 * We construct a header out of these values.
 *
 * Notice the .on events system of managing data connections. Notice the chunking of data. This makes the app faster, but much harder to understand.
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