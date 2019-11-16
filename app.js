var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')  //שלב2

var webRoutes = require('./routes/webRoutes');   //add routes    שלב1

var app = express();
mongoose.connect('mongodb://localhost:27017/my_webRoutes', {useNewUrlParser: true}) //שלב2 //my_cars חיבור לדאטהבייס //collections

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', webRoutes);   //changed to Routes  שלב1


module.exports = app;

