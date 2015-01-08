// imports the path module for doing path resolution on path strings
var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers.js');
var fs = require('fs');

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var statusCode;


  // archive.downloadUrl("www.google.com", function(data){
    // if( data ){
      // console.log('data added')
    // }else{
      // console.log('data not added')
    // }
  // })
  archive.addUrlToList("www.yahoo.com", function(err, data){
    if(err) console.log("error")
    console.log(data)

  })
  archive.addUrlToList("www.google.com", function(err, data){
    if(err) console.log("error")
    console.log(data)

  })


  // archive.isURLArchived('www.google.com', function(data){
  //   if ( data === 'www.google.com' ) {
  //     // serve up my page
  //     console.log('found it');
  //   } else {
  //     console.log('file not found');
  //   }
  // });
  // archive.downloadUrls("http://www.yahoo.com");

  if ( req.method === 'GET' ) {
    if ( req.url === '/' ) {
      var sitePath = archive.paths.siteAssets + "/index.html";
      fs.readFile(sitePath, function(err, data){
        if(err) console.log(err);
        else{
          statusCode = 200;
          res.writeHead(statusCode, httpHelpers.headers);
          res.end(data);
        }
      });
    }else if(req.url === '/www.google.com' ){
      statusCode=200;
      res.writeHead(statusCode, httpHelpers.headers);
      // we need to return the HTML that contains the string google
      res.end(archive.archivedSites + '/google/');
    }
  }else if(req.method === 'POST'){
    statusCode = 302;
    console.log("REQ.url: ", req.url)
    archive.addUrlToList(req.url, function(url){
      console.log(url);
      res.end(data)
    });
    //below is temporary
  }


  // else {
  //   statusCode = 404;
  //   // console.log("here 3", statusCode)
  //   res.writeHead(statusCode, httpHelpers.headers);
  //   res.end(JSON.stringify('not found'));
  // }

};
