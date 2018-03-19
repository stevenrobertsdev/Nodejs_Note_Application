console.log('Starting notes.js');

const   fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return notes = JSON.parse(notesString);
    } catch(err) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes), (err) => {
        if(err) throw err;
    })
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note)=> {
        return note.title === title;
    });

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log("Getting all notes");
};

var getNote = (title) => {
    console.log(`Read the note: ${title}`);
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => {
        return note.title !== title;
    })
    saveNotes(filteredNotes);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}