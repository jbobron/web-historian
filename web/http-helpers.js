var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};


// serveAssets will be called every time we return a static file...(the web app and any other index.html)
exports.serveAssets = function(res, asset, callback) {
  // asset --> req.url
  fs.readFile(archive.paths.siteAssets +  asset, function(err, data){
    if (err) {
      // file doesn't exist in public
      fs.readFile(archive.paths.archivedSites + asset + '/index.html', function(err, data){
        // file doesn't exist in any location
        if (err) {
          callback ? callback() : exports.send404(res);
        } else {
          // file exists
          exports.sendResponse(res, data);
        }
      });
    } else {
      // file exists
      exports.sendResponse(res, data);
    }
  });
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
};

exports.collectData = function(request, callback) {
  var data = "";
  request.on('data', function(chunk){
    data+=chunk;
  });
  request.on('end', function(){
    callback(data);
  });
};

exports.sendResponse = function(response, obj, status) {
  status = status || 200;
  response.writeHead(status, headers);
  response.end(obj);
};

exports.send404 = function(response){
  exports.sendResponse(response, '404: Page Not Found', 404);
};


// As you progress, keep thinking about what helper functions you can put here!
