// imports the path module for doing path resolution on path strings
var path = require('path');
var urlParser = require('url');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers.js');
var fs = require('fs');

// require more modules/folders here!

var actions = {
  "GET": function(request, response) {
    var parts = request.url
    if ( parts === '/' ) {
      parts = '/index.html';
    } else {
      parts = "/" + parts; // will change archive.siteAsstes or something
    }
    httpHelpers.serveAssets(response, parts)
  },

  "POST": function(request, response) {
    // extract url data from request
    // check if the URL is in sites.txt
      // if sites is in sites.txt
        // serve index.html for that site to the client
      // else
        // add site to sites.txt
        // download url and store index.html in archive
        // serve loadpage.html to client
        // when page is downloaded
          // serve page
  }
};



exports.handleRequest = function (req, res) {
  var statusCode;

  var action = actions[req.method];
  // if we have a registered action
  if ( action ) {
    action(req, res);
  } else {
    httpHelpers.send404(res);
  }
};











  // if ( req.method === 'GET' ) {
  //   if ( req.url === '/' ) {
  //     var sitePath = archive.paths.siteAssets + "/index.html";
  //     fs.readFile(sitePath, function(err, data){
  //       if(err) console.log(err);
  //       else{
  //         statusCode = 200;
  //         // ServeThemAssests
  //         res.writeHead(statusCode, httpHelpers.headers);
  //         res.end(data);
  //       }
  //     });
  //   }else if(req.url === '/www.google.com' ){
  //     statusCode=200;
  //     res.writeHead(statusCode, httpHelpers.headers);
  //     // we need to return the HTML that contains the string google
  //     res.end(archive.archivedSites + '/google/');
  //   }
  // }else if(req.method === 'POST'){
  //   statusCode = 302;
  //   archive.addUrlToList(req.url, function(url){
  //     res.end(data)
  //   });
  //   //below is temporary
  // }
  // else {
  //   statusCode = 404;
  //   // console.log("here 3", statusCode)
  //   res.writeHead(statusCode, httpHelpers.headers);
  //   res.end(JSON.stringify('not found'));
  // }












  // archive.downloadUrl("www.google.com", function(data){
    // if( data ){
      // console.log('data added')
    // }else{
      // console.log('data not added')
    // }
  // })
  // archive.addUrlToList("www.yahoo.com", function(err, data){
  //   if(err) console.log("error")
  //   console.log(data)

  // })
  // archive.addUrlToList("www.google.com", function(err, data){
  //   if(err) console.log("error")
  //   console.log(data)

  // })
  // archive.readListOfUrls(function(data){
  //   archive.isUrlInList(data, 'example1.com', function(url, isInList){
  //     console.log(url, "is in List equals: ", isInList)
  //   });
  // });

  // archive.isURLArchived('www.google.com', function(data){
  //   if ( data === 'www.google.com' ) {
  //     // serve up my page
  //     console.log('found it');
  //   } else {
  //     console.log('file not found');
  //   }
  // });
  // archive.downloadUrls("http://www.yahoo.com");
