// Create web server
// Create web server
var express = require('express');
var app = express();
var fs = require("fs");

// Get comments
app.get('/getComments', function (req, res) {
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

// Add comments
app.get('/addComments', function (req, res) {
   // First read existing comments.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["comment4"] = comment["comment4"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

// Delete comments
app.get('/deleteComments', function (req, res) {
   // First read existing comments.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["comment4"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

// Update comments
app.get('/updateComments', function (req, res) {
   // First read existing comments.
   fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["comment4"] = "This is the updated comment";
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Comments app listening at http://%s:%s", host, port)

})