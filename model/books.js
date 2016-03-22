'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: false
  },
  published: {
    type: Date,
    defalt: new Date()
  },
  keyWords: Array,
  published: Boolean,
  author: {
    name: String
  },
  details: {
    modelNumber: Number,
    hardCover: Boolean,
    pages: Number,
    reviews: Number,
    rank: Number
  }
})

module.exports = mongoose.model('Book', BookSchema);
