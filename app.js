console.log("Starting app.js");

const   fs = require('fs'),
        _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];

 if(command === 'add') {
     console.log("Add a note");
 } else if(command === 'list') {
     console.log("List all notes");
 } else {
     console.log("Command not regonised");
 }
