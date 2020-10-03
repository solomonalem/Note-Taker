const fs = require("fs");
const path = require("path");

function filterByQuery(query, notesArray) {
  let filteredResults = notesArray;

  if (query.description) {
    filteredResults = filteredResults.filter(
      (note) => note.description === query.description
    );
  }
  if (query.title) {
    filteredResults = filteredResults.filter(
      (note) => note.title === query.title
    );
  }
  return filteredResults;
}

function findById(id, notesArray) {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
}

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../data/notes.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

function validateNote(note) {
  if (!note.title || typeof note.title !== "string") {
    return false;
  }
  if (!note.description || typeof note.description !== "string") {
    return false;
  }

  return true;
}

module.exports = {
  filterByQuery,
  findById,
  createNewNote,
  validateNote,
};
