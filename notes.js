console.log('Starting notes.js');

const fs = require('fs');

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

    notes.push(note);

    fs.writeFileSync('notes-data.json', JSON.stringify(notes), (err) => {
        if(err) throw err;
    })

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