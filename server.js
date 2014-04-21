/*
 *
 * This is the canonical node.js implementation.
 *
 * This has no dependencies. Run this as:
 *
 * node server.js
 *
 * A web page will appear at 127.0.0.1:1337, and it will say "Hello World"
 *
 * The console will show the log message.
 * 
 */



var http = require("http");

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log("Server running at http://127.0.0.1:1337/");