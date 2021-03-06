console.log('Starting notes.js');

const   fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return notes = JSON.parse(notesString);
    } 
    catch(err) {
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
    var notes = fetchNotes();
    return notes 
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => {
        return note.title === title;
    });
    return filteredNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => {
        return note.title !== title;
    })

    if(filteredNotes.length !== notes.length) {
        saveNotes(filteredNotes);
        return filteredNotes;
    }
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}