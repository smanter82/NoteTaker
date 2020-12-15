//Dependencies
const express = require("express");
// const db = require("./db/db.json")

//Create express server
const app = express();
//Set Port
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Router
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

//Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });

