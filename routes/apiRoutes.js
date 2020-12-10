const path = require("path");
const fs = require("fs");
const db = require("../db/db.json")


module.exports = function (app) {
    //API GET Requests

// app.get('/db/data', function (req, res) {
//     res.json(tableData);
//   });

//   app.get('/api/waitlist', function (req, res) {
//     res.json(waitListData);
//   });

  // ---------------------------------------------------------------------------

  // post
  app.post('/api/notes', function (req, res) {
    const data = req.body;
    db.push(data)
    res.json(db)
});
}