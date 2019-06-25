const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;

const {addMech, findMech} = require('../DB/mechControllers.js')
const {addBuild} = require('../DB/buildController.js')
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// ======/build endpoints=========
app.post('/builds', (req, res) => {
  //save a build to the database
  console.log(req.body)
  addBuild(req.body, (err) => {
    if(err){
      res.status(400).send()
    } else {
      res.status(200).send()
    }
  })
  
});

app.get('/builds', (req, res) => {
  //retrieve all of a user's builds from the database or load a single build depending on query
});

app.put('/builds', (req, res) => {
  //update an existing saved build

})

// ====/mech endpoints======

// app.post('/mechs', (req, res) => {
//   //save a build to the database
  
// });


app.get('/mechs', (req, res) => {
  //retrieve a specfic mech or all mechs
  findMech(req.query.id, (err, result) => {
    if(err){
      console.log(err)
      res.status(404).send
    } else {
      res.status(200).send(result)
    }

  })
});



app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
