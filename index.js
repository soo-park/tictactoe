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
var files       = require('./lib/files');
var game        = require('./lib/game');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('TICTACTOE', { horizontalLayout: 'full' })
  )
);

if (files.directoryExists('.git')) {
  console.log(chalk.grey('You are in a git repository!'));
  process.exit();
}
