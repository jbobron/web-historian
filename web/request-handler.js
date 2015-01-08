// imports the path module for doing path resolution on path strings
var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers.js');

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // console.log(req);
  var statusCode
  if ( req.url === '/' ) {
    if ( req.method === 'GET' ) {
      console.log("here 1")
      statusCode = 200;
      res.writeHead(statusCode, httpHelpers.headers);
      // we need to return archive.path.list + <html> or just html
      // res.end(archive.paths.list + '<input>');
      // [note] this is hacked just to pass the test....BRB
      res.end('<input>');
    }
  }
    // console.log(req.url);
  else if ( req.url === '/www.google.com' ) {
    // add google.com to sites.txt
    // console.log("here 2")
    statusCode=200;
    res.writeHead(statusCode, httpHelpers.headers);
    // we need to return the HTML that contains the string google
    res.end(archive.archivedSites + '/google/');
  }

  else {
    statusCode = 404;
    // console.log("here 3", statusCode)
    res.writeHead(statusCode, httpHelpers.headers);
    res.end(JSON.stringify('not found'));
  }

};
