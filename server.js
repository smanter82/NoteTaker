//Dependencies
const express = require("express");

//Create express server
const app = express();
//Set Port
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Router
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

//Listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });

