const path = require("path");
const fs = require("fs");
const db = require("../db/db.json")
const { v4: uuidv4 } = require('uuid')
// const dataFile = JSON.parse(fs.readFileSync(path.join(__dirname + db), "utf-8"));

module.exports = function (app) {
    //API GET Request

    app.get('/api/notes', function (req, res) {
      res.json(db);
      // console.log(dataFile)
    })


  // post request
  app.post('/api/notes', function (req, res) {
    const data = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };
    db.push(data);
    // res.json(db);
    // console.log(db)
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(db), (err)=>{
      if(err) throw error;
    });
    res.json(db);
    console.log(db)
});

}