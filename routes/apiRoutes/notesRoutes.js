const router = require("express").Router();
const uniqid = require("uniqid");
const {
  deleteNoteById,
  createNewNote,
  validateNote,
} = require("../../lib/notes");
const { notes } = require("../../data/notes");

// ==================   GET =========================================

router.get("/notes", (req, res) => {
  let results = notes;

  res.json(results);
});

// ==================   POST =========================================

router.post("/notes", (req, res) => {
  // assign unique id
  req.body.id = uniqid();

  // if any data in req.body is incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

// ==================   DELETE =========================================

router.delete("/notes/:id", (req, res) => {
  const note = deleteNoteById(req.params.id, notes);
  res.json(note);
});

module.exports = router;
