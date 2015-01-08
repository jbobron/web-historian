var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var request = require('request');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// COMPLETE
exports.readListOfUrls = function(callback){
  // reads list of Urls from sites.txt
  var array;
  fs.readFile(exports.paths.list, function(err, data){
    array = data.toString().split('\n');
    callback(array);
  });
};


//COMPLETE
exports.isUrlInList = function(array, url, callback){
  var isInList = false;
    for ( var i = 0; i < array.length; i++ ) {
      if ( array[i] === url ) {
        isInList = true;
        break;
      }
    }
  console.log("Url is in List is: ", isInList);
  callback(url, isInList);
};

// COMPLETE
exports.addUrlToList = function(url, callback){
  console.log(this.paths.list)
  console.log(url)
  fs.appendFile('./archives/sites.txt', url + "\n", function(err, data){
    if ( err ) console.log('failed to add ' + url + ' to sites.txt', error);
    else {
      console.log(url, 'was added to sites.txt');
      callback(data);
    }
  });
};

// COMPLETE
exports.isURLArchived = function(url, callback){
  fs.readdir(this.paths.archivedSites, function(err, files){
    //iterate through array and see if targeturl is archived
    if(!files.length){
      console.log("No Files archived");
    }
    for(var i = 0; i<files.length; i++){
      callback(files[i]);
    }
  })
};

// COMPLETE
exports.downloadUrl = function(url, callback){
  //add a directory
  //add a file called index.html with contents=== body into that new directory
  var context = this;
  fs.mkdir(this.paths.archivedSites + "/" + url, function(err){
    request("http://" + url, function(error, response, body){
      console.log(body)
      fs.writeFile(context.paths.archivedSites + "/" + url + '/index.html', body, function(err){
        if (err) console.log('ERROR writing index.html for url: ' + url);
        else console.log('SAVED index.html for url: ' + url );
      });
    });
  });
};

exports.downloadUrls = function(url, callback){
    //use download URL HERE
}
























