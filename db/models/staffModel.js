'use strict';

let mongoose = require('mongoose');

let staffSchema = mongoose.Schema({
  Name: String,
  Job: String,
  Role: String,
  Email: String,
  Phone: String,
});

staffSchema.methods.query = function(search){

}

var collection = 'staff';
let staff = mongoose.model('staff', staffSchema, collection);

module.exports = staff;
