const router = require("express").Router();
const noteRoutes = require("../apiRoutes/notesRoutes");

router.use(noteRoutes);

module.exports = router;
