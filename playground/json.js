const fs = require('fs');

var originalNote = {
    title:"Some title",
    body: "Some body text"
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("note.json", originalNoteString, (err)=>{
    if(err) throw err;
})

var noteString = fs.readFileSync('note.json',(err)=> {
    if(err) throw err;
})

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);