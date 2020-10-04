const fs = require("fs");
const path = require("path");

// =========================   DELETE   =====================================================

const deleteNoteById = (id, notesArray) => {
  const result = notesArray.filter((note) => note.id === id)[0];
  const index = notesArray.indexOf(result);

  //remove that element from array
  notesArray.splice(index, 1);

  fs.writeFileSync(
    path.join(__dirname, "../data/notes.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return notesArray;
};

// ==========================  CREATE    =====================================================

const createNewNote = (body, notesArray) => {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../data/notes.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
};

// ========================    VALIDATE    ===================================================

const validateNote = (note) => {
  if (!note.title || typeof note.title !== "string") {
    return false;
  }
  if (!note.text || typeof note.text !== "string") {
    return false;
  }

  return true;
};

module.exports = {
  createNewNote,
  validateNote,
  deleteNoteById,
};
