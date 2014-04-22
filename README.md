A Simple Node.js Introduction
=============================

This repo represents a presentation made to NYT developers introducing node and node concepts, aimed at developers familiar with coding, but not node itself.

It contains a list of tags which represent iterative steps in the development process:

01-fresh
--------
This is just a package.json file created by "npm init". The point is that node modules are node modules, and that package.json is the key to understand many aspects of a node app.

02-basic-server
---------------
Here, we grab the classic http server example from nodejs.org, and talk about what's happening.

03-basic-express
----------------
I pull in the express module, and reimplement the above example using express.

04-proxy-request
----------------
How to add routes to an express app, and then how to make a remote proxied request using built in modules.

05-simplified-request
---------------------
Re-write the above example using the require module.

06-external-module
------------------
Split the code we just wrote into a seperate file, cover how to pull it back into the app, and how the require system in node works, and what "module.exports" means.

07-jade-and-views
-----------------
Build an actual html page using jade, style it with css, look at adding static files to express.
