console.log("Starting app.js");

const   fs = require('fs'),
        _ = require('lodash'),
        yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

var printNote = (title, body) => {
    console.log('------------');
    console.log('Note successfully created!')
    console.log(`Title: ${title}`);
    console.log(`Body: ${body}`);
    console.log('------------');
}

 if(command === 'add') {
     var note = notes.addNote(argv.title, argv.body);
     
     if(note) {
        printNote(note.title,note.body);
        
     } else {
        console.log('------------');
        console.log("Note already exists, please change the title.")
        console.log('------------');
     }

 } else if(command === 'list') {
     notes.getAll();
 } else if(command === 'remove') {
    notes.removeNote(argv.title);
 } else if(command === 'read') {
    notes.getNote(argv.title);
 } else {
     console.log("Command not regonised");
 }
