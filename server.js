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



var express = require("express");

var app = express();

app.get('/', function(req, res) {
  res.send("Hello World");
});

console.log("Server running at http://127.0.0.1:1337/");

app.listen(1337);