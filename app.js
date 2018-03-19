console.log("Starting app.js");

const   fs = require('fs'),
        _ = require('lodash'),
        yargs = require('yargs');

const notes = require('./notes.js');

var titleCommand = () => {
    return {
        describe: "Title of note",
        demand: true,
        alias: "t"
    }
}

const argv = yargs
    .command('add', "Lets the user add a new note", {
        title: titleCommand(),
        body: {
            describe: "Body of note",
            demand: true,
            alias: "b"
        }
    }).command("list","List all notes")
    .command("read","Read a notes", {
        title: titleCommand()
    })
    .command("remove","Remove a notes", {
        title: titleCommand()
    }).help().argv;
var command = argv._[0];

var printNote = (title, body) => {
    console.log('------------');
    console.log(`Title: ${title}`);
    console.log(`Body: ${body}`);
    console.log('------------');
}

var printNotFound = (a) => {
    if(!a) {a = "Note not found."};
    console.log('------------');
    console.log(a);
    console.log('------------');
};

 if(command === 'add') {
     var note = notes.addNote(argv.title, argv.body);
     
     if(note) {
        printNote(note.title,note.body);
        
     } else {
        printNotFound("Note already exists, please change the title.")
     }
 } 
 
 else if(command === 'list') {
     var allNotes = notes.getAll();

     if(allNotes.length !== 0) {
        for(var i = 0; i < allNotes.length; i++) {
            printNote(allNotes[i].title, allNotes[i].body);
         }
     } else {
        printNotFound();
     }     
 } 
 
 else if(command === 'remove') {
    var note = notes.removeNote(argv.title);

    if(note) {
        console.log('------------');
        console.log(`${argv.title} has been removed.`)
        console.log('------------');
        
     } else {
        printNotFound();
     }
 } 
 
 else if(command === 'read') {
   var note = notes.getNote(argv.title);
   if(note) {
        printNote(note.title, note.body);
   } else {
        printNotFound();
   }
 } 
 
 else {
     console.log("Command not regonised");
 }
