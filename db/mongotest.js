'use strict';

var util = require('util');
var path = require('path');
var fs = require('fs');
var Bot = require('slackbots');
var http = require('http');
let cfenv = require('cfenv');
let appEnv = cfenv.getAppEnv();
let mongoose = require('mongoose');

//Connect to MongoDB
var db = require('./mongo-connect')(appEnv);

//Models
var Sales = require('./salesModel');


Sales.find(function (err, sales) {
  if (err) throw err;

  console.log(sales);
});
