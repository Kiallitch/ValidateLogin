const express = require('express');
const mustache = require('mustache-express');
const session = require('express-session');
const bodyParser = require('body-parser');



const app = 'express'();
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', '/views');
app.use(express.static('');
app.use(bodyParser.urlencoded({
  extended: true
})
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialize: true,

});

app.use(function(req, res, next){
  req.session.users = {
    David: 'bestinshow'
      }
  };

  next(); //call back
});

app.get('/', function(req, res, next) {
  {
    if (req.session.users[req.body.username] === req.body.password) {
      res.send("'Hello ' + res.session.username"
    } else {
      res.render('index')
    }

});

app.get('/login', function(req, res, next){
res.render('index')

});

app.post('/login' function(req, res, next){
  console.log((req.body);
  console.log(req.session.users[req.body.username]);
  if (req.session.users[req.body.username] === req.body.password){
    req.session.username = req.body.username;
  }
  res.redirect('/');
});

app.listen(3000, function(){
  console.log("Geez, I hear you already!");
});
