console.log("Starting app.js");

const   fs = require('fs'),
        _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];

 if(command === 'add') {
     console.log("Add a note");
 } else if(command === 'list') {
     console.log("List all notes");
 } else if(command === 'remove') {
    console.log('Removing a note');
 } else if(command === 'read') {
    console.log('reading a note');
 } else {
     console.log("Command not regonised");
 }
