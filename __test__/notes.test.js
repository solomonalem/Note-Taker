const fs = require("fs");
const { createNewNote, validateNote, deleteNoteById } = require("../lib/notes");
const { notes } = require("../data/notes");

jest.mock("fs");

test("creates an note object", () => {
  const note = createNewNote(
    { title: "website", text: "hello", id: "jhgdja3ng2" },
    notes
  );

  expect(note.title).toBe("website");
  expect(note.text).toBe("hello");
  expect(note.id).toBe("jhgdja3ng2");
});

test("finds by id", () => {
  const startingNotes = [
    {
      id: "3",
      title: "Lucas",
      text: "calling",
    },
    {
      id: "4",
      title: "Maria",
      text: "model",
    },
  ];

  const result = deleteNoteById("3", startingNotes);

  expect(result.length).toBe(1);
});

test("validates note", () => {
  const note = {
    id: "3",
    title: "Lucas",
    text: "calling",
  };

  const invalidNote = {
    id: "3",
    title: "Lucas",
  };

  const result = validateNote(note);
  const result2 = validateNote(invalidNote);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});
