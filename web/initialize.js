// [note] we import the file system module (API)
// [note]  if file structure doesn't exist, we create it, if it does exist, we save the sites.txt into a file variable (not sure for what purpose)
var fs = require('fs');

// Sync is ok here because this is called just once on startup.
module.exports = function () {
  // if the archive folder doesn't exist, create it.
  if (!fs.existsSync("./archives")) {
    // We use fs.mkdirSync to create the folder
    fs.mkdirSync("./archives");
  }

  // if the file doesn't exist, create it.
  if (!fs.existsSync("./archives/sites.txt")) {
    // [note] We use fs.openSync to create the file, passes in a 'w' for writing to the file (file is created if it doesnt exist, and truncated if it exsts)
    // [note] file is saved as a variable (what is the file type?)
    var file = fs.openSync("./archives/sites.txt", "w");
    // [note] assuming this is required whenever we open
    fs.closeSync(file);
  }

  // if the folder doesn't exist, create it.
  if (!fs.existsSync("./archives/sites")) {
    // We use fs.mkdirSync to create the folder
    fs.mkdirSync("./archives/sites");
  }
};
