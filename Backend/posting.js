const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const stupost= require('./models/chat');
const jwt1 = require('jsonwebtoken');
const mongoose = require('mongoose');
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
mongoose.connect("mongodb+srv://smit:n2u1hai7VamLlDNk@cluster0-9revo.mongodb.net/maryville?retryWrites=true").then(function(){
  console.log("Successfully Connected");
}).catch(function(){
  console.log("Error Occured");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req,res,next)
{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-headers","Origin,X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS,PUT");
  next();
});
