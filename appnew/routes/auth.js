var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'blog_db';
var objectId = require('mongodb').ObjectId;

let db;

MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
 
  db = client.db(dbName);

router.post('/login',function(req, res, next) {
  var post = req.body;
  if (post.email === 'adigun4@mail.com' && post.password === 'you') {
    res.send("Authentication successful");
  } else {
    res.send("Invalid login credentials")
  }
});

