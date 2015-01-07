// imports the path module for doing path resolution on path strings
var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('/http-helpers.js');

// require more modules/folders here!

exports.handleRequest = function (req, res) {
  res.end(archive.paths.list);
};
