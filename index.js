// lines three through six are requiring different parts of node we will need.
// in order to develop the app

const express = require('express');
const mustache = require('mustache-express');
const session = require('express-session');
const bodyParser = require('body-parser');

// Lines 11 through 24 are calling them forth saying "Hey we need to use you!"
// That doesn't feel entirely accurate, but maybe I should have said it's
// "applying" them not just requiring them for the app.

const app = express();
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

}));

// this is a list of id and passwords currently in the database.

app.use(function(req, res, next){
  req.session.users = {
    David: 'bestinshow'
      };

  next(); //call back
});

// If you successfully login then you will see the "Hello" message along with
// your name, but if not... you don't see it.  The page just resets.

app.get('/', function(req, res, next) {
    if (req.session.users[req.body.username] === req.body.password) {
      res.send("'Hello ' + req.session.username")
    } else {
      res.render('index')
    }

});

app.get('/login', function(req, res, next){
res.render('index')

});

// this allows the page to either reset or move onto the logged in and hello
// version.

app.post('/login', function(req, res, next){
  console.log((req.body);
  console.log(req.session.users[req.body.username]);
  if (req.session.users[req.body.username] === req.body.password){
    req.session.username = req.body.username;
  }
  res.redirect('/');
});

// this is the ending to most all apps and I just added it to the end because at
// the moment that's what I'm doing.

app.listen(3000, function(){
  console.log("Geez, I hear you already!");
});


// in my own personal way I described what the app was doing, if I am slightly
// or entirely off, please let me know.  I did this at the end of the day.
// The notes, reviewing and verifying that I actually learned something from
// the live code that took... what... five hours?  Hopefully this is fairly
// accurate.  (TIME: 10:48)
