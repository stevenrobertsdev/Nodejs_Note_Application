# Nodejs_Note_Application
An application built with Node.js that allows the user to create, store, list and remove notes through the command line.

## Installing
Clone repo into required folder and run npm install to load the needed dependencies. In your CLI, navigate into the directory holding the note application and you're ready to go.

## Making a new note
To create a new note, run the command
```
node app.js add -t "NOTE TITLE HERE" -b "NOTE TEXT HERE"
```
This will add a new note to the JSON file. The title of the note will be what was passed with the `-t` command, and the text content of the note will be what was passed in the `-b` command.

## Removing a note
To remove a note, run the command
```
node app.js remove -t "NOTE TITLE HERE"
```
This will search through the JSON file and if a note is found with the same title as the one passed in the `-t` command, it will be removed.

## Reading a note
To read a specific note, run the command
```
node app.js read -t "NOTE TITLE HERE"
```
This will search through the JSON file and a single note matching the title passed in the `-t` command will be printed to the console.

## List all note
To list all the notes, run the command
```
node app.js list
```
No other commands are needed. This will print all available notes to the console.

## Getting help
To get help, run the command
```
node app.js --help
```
This will print to the console a list on commands that can be used and a description of what they do.


