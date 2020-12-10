//Dependencies
const express = require("express");

const app = express();
const PORT = 3000 || process.env.PORT;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//array variables that will hold the data
// const database = require("./db.json");

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });