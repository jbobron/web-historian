// [note] we import the http module, the request handler, and initialize file
var http = require("http");
var handler = require("./request-handler");

var initialize = require("./initialize.js");

// Why do you think we have this here?
// HINT:It has to do with what's in .gitignore
// [note] Why are we invoking initialize itself and not initialize.exports()?
// we are intializing because our archive is not being added to our git repo...thus we have to initialize each time and create the archive fs structure
initialize();

var port = 8080;
var ip = "127.0.0.1";
// create our instance of the server
var server = http.createServer(function(req, res){

  handler.handleRequest(req,res)
});
console.log("Listening on http://" + ip + ":" + port);
// server listens on specified port/ip
server.listen(port, ip);
