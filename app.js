console.log("Starting app.js");

const   fs = require('fs'),
        os = require('os'),
        notes = require('./notes.js');

var user = os.userInfo();

fs.appendFile('greetings.txt', user.username , (err) => {
    if(err) throw err;
});