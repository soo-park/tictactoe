var fs = require('fs');
var path = require('path');

module.exports = {
  // Get the current directory (to get a default repo name)
  // Check whether a directory exists in the command line interface
  getCurrentDirectoryBase : function() {
    return path.basename(process.cwd());
  },


  // referred method of checking whether a file or directory exists 
  // keeps changing—the current way is to use fs.stat / fs.statSync. 
  // These throw an error if there’s no file, so we need to use a 
  // try..catch block.
  directoryExists : function(filePath) {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
};