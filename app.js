console.log("Starting app.js");

const   fs = require('fs'),
        _ = require('lodash'),
        yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

 if(command === 'add') {
     notes.addNote(argv.title, argv.body);
 } else if(command === 'list') {
     notes.getAll();
 } else if(command === 'remove') {
    notes.removeNote(argv.title);
 } else if(command === 'read') {
    notes.getNote(argv.title);
 } else {
     console.log("Command not regonised");
 }
