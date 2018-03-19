console.log("Starting app.");

const   fs = require('fs'),
        os = require('os');

var user = os.userInfo();

fs.appendFile('greetings.txt', user.username , (err) => {
    if(err) throw err;
});