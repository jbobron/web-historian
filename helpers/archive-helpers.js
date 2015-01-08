var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

// don't understand this.....
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

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback){
  // reads list of Urls from sites.txt
  var array;
  fs.readFile(exports.paths.list, function(err, data){
    array = data.toString().split('\n');
    callback(array);
  });
};

exports.isUrlInList = function(array, callback){
  var isInList = false;
    for ( var i = 0; i < array.length; i++ ) {
      if ( array[i] === url ) {
        isInList = true;
        break; // breaks out of for loop
      }
    }
    if(isInList){
      callback();
    } else{
      console.log("File is not in list :( ");
    }

};
  // returns true or false depending on whether passed in url is in sites.txt


exports.addUrlToList = function(url, callback){
  // adds Url to sites.txt
  fs.appendFile('./archives/sites.txt', url, function(err){
    if ( err ) console.log('failed to add ' + url + ' to sites.txt', error);
    else {
      console.log(url, 'was added to sites.txt');
      callback(url);
    }
  });
};

exports.isURLArchived = function(){

  // checks to see if the Url's HTML is archived ( this is different from just checking to see if the url string is stored in a file somewhere )
};

exports.downloadUrls = function(){
  // I think this is a GET request to the servers specified in sites.txt
  // not sure how that data is handled, asssuming we utilize the fs module to add those sites HTML to our file system
};










