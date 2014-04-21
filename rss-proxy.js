/*
 * Here we see how to set up a module internally.
 *
 * The key piece is "module.exports = ..."
 *
 * In node, you can call require on any javascript file. IF that file contains "modules.exports = ...", the value of module.exports, what ever it is, will be returned from the require function.
 *
 * If you wanted to require a config object, you could say
 *
 * module.exports = {name: "bob", job: "zoo keeper"};
 *
 * If you said 
 * 
 * var config = require("./config.js");
 *
 * "config" would be populated with that hash. It seems slightly strange at first, but is relatively transparent for further work.
 *
 * IMPORTANT:
 *
 * Node expects there to be something called "npm", which is the node package manager. npm installs modules into a folder called "node_modules". If you say 
 *
 * require("request");
 *
 * Node will look for this folder, for a folder called request containing a package.json file. If it doesn't find one, it will search up the directory tree until it finds one. Meaning:
 *
 * 1. You can have one node_modules folder at the top level of your app.
 *
 * 2. If you want to include a local file like this one, you have to use a relative path like 
 *
 * "./lib/my-file.js"
 *
 * Otherwise the require won't work.
 *
 *
 */

var request = require("request");

module.exports = exports = function(app) {

  app.get('/data.xml', function(req, res) {
    var requestUrl = "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml";
    res.setHeader("content-type", "text/xml");
    request(requestUrl).pipe(res);
  });

};

