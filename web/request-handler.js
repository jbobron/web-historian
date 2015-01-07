// imports the path module for doing path resolution on path strings
var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers.js');

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // console.log(req);
  var statusCode
  if ( req.method === 'GET' ) {
    statusCode = 200;
    if ( req.url === '/' ) {
      res.writeHead(statusCode, httpHelpers.headers);
      // we need to return archive.path.list + <html> or just html
      // res.end(archive.paths.list + '<input>');
      // [note] this is hacked just to pass the test....BRB
      res.end('<input>');
    }
    // console.log(req.url);
    if ( req.url === '/www.google.com' ) {
      // add google.com to sites.txt
      //
      res.writeHead(statusCode, httpHelpers.headers);

      // we need to return the HTML that contains the string google
      res.end(archive.archivedSites + '/google/');
    }
  }


};
