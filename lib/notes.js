const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');
let notes = require('../db/db.json')

const saveNote = note => {
	const newNote = {
		title: note.title,
		text: note.text,
		id:uniqid()
	};
	notes.push(newNote);
	// write to .json file
	fs.writeFileSync(
		path.join(__dirname, '../db/db.json'),
		JSON.stringify(notes, null, 2)
	);
};

const deleteNote = noteId => {
    notes = notes.filter((note => note.id !== noteId))

    fs.writeFileSync(
		path.join(__dirname, '../db/db.json'),
		JSON.stringify(notes, null, 2)
	);
	return notes;
}

module.exports = {saveNote, deleteNote};