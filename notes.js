console.log('Starting notes.js');

const   fs = require('fs');


var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch(err) {
        
    }

    var duplicateNotes = notes.filter((note)=> {
        return note.title === title;
    });

    if(duplicateNotes.length > 0) {
        console.log('A note with this title already exists, please choose a different title.');

    } else {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes), (err) => {
            if(err) throw err;
        })
    }
};

var getAll = () => {
    console.log("Getting all notes");
};

var getNote = (title) => {
    console.log(`Read the note: ${title}`);
};

var removeNote = (title) => {
    console.log(`Removing the note: ${title}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}