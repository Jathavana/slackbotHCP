'use strict';

let mongoose = require('mongoose');

let opportunitySchema = mongoose.Schema({
  Name: String,
  Role: String,
  Phone: String,
  Email: String,
})

let collection = 'opportunities';
let opportunities = mongoose.model('opportunities', opportunitySchema, collection);

module.exports = opportunities;
