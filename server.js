const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3002;

const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// This means that all of our front-end code can now be accessed without having a specific server endpoint created for it!
app.use(express.static("public"));

// ----------  LISTENING  ---------------------

app.listen(PORT, () => {
  console.log(` server running on port ${PORT}!`);
});
