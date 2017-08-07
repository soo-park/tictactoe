var chalk       = require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');
var inquirer    = require('inquirer');
var Preferences = require('preferences');
var Spinner     = CLI.Spinner;
var GitHubApi   = require('github');
var _           = require('lodash');
// Note that the simple-git package exports a function which needs to be called.
var git         = require('simple-git')();
var touch       = require('touch');
var fs          = require('fs');
var path = require('path');

// Get the current directory (to get a default repo name)
// Check whether a directory exists in the command line interface
path.basename(process.cwd());

// referred method of checking whether a file or directory exists 
// keeps changing—the current way is to use fs.stat / fs.statSync. 
// These throw an error if there’s no file, so we need to use a 
// try..catch block.


var Game = function() {
  this.board = [['-', '-', '-'],['-', '-', '-'], ['-', '-', '-']]
  this.player1 = new Player(true);
  this.player2 = new Player(false);

  return "I won"
}

var Player = function(turn) {
  this.spot = [];
  this.turn = turn;
}




var a = new Player();

console.log(a);
