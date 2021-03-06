//Dependencies
const path = require("path");
const fs = require("fs");
const db = require("../db/db.json")
const { v4: uuidv4 } = require('uuid')

module.exports = function(app) {
    //API GET Request

    app.get('/api/notes', function (req, res) {
      res.json(db);

    });


  // API post request
  app.post('/api/notes', function (req, res) {
    const data = {
      title: req.body.title,
      text: req.body.text,
    //Create unique ID for each note.
      id: uuidv4(),
    };
    db.push(data);
    // res.json(db);
    fs.writeFile(path.join(__dirname, "/../db/db.json"), JSON.stringify(db), (err)=>{
      if(err) throw error;
    });
    res.json(db);
    // console.log(db)
});

//API delete request
app.delete('/api/notes/:id', function(req, res) {
  //find note by id and delete it.  
  const noteId = req.params.id;
    
  for (let i=0; i<db.length; i++) {
    if (db[i].id == noteId){
      db.splice(i, 1);
    }
  }
  fs.writeFile(path.join(__dirname, "/../db/db.json"), JSON.stringify(db), (err)=>{
    if(err) throw error;
  });
  
  res.send(db);  


   

});

}
