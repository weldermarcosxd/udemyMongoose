var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var books = require('./model/books');

var db = 'mongodb://localhost/udemy';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

mongoose.connect(db);

app.get('/', function (req, res) {
  res.send("This is the main page");
})

app.get('/books', function (req, res) {
  console.log('Retriving the books');
  books.find({}).exec(function (err, books) {
    if(err){
      console.error('Shit happend: ' + err);
    }else {
      res.json(books);
    }
  })
})

app.get('/books/:id', function (req, res) {
  console.log('Retriving one book');
  books.findOne({
    _id: req.params.id
  }).exec(function (err, book) {
    if(err){
      console.error('Shit happend: ' + err);
    }else {
      res.json(book);
    }
  })
})

app.post('/books', function (req, res) {
  var newBook = new books();

  newBook.title = req.body.title;
  newBook.published = req.body.published;
  newBook.keywords = req.body.keywords;
  newBook.author = req.body.author;
  newBook.detais = req.body.details;

  newBook.save(function (err, book) {
    if(err){
      console.error('Shit happend: ' + err);
    }else {
      res.send(book);
    }
  })
})

app.listen(3000, function () {
  console.log('App listening in port 3000');
})
