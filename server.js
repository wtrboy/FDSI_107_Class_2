var express = require('express');
var server = express();

/************************************/
/************************************/
/************************************/
/************************************/
/************************************/
/************************************/

// render HTML from endpoints
var ejs = require('ejs');
server.set('views', __dirname + "/public");
server.engine('html', ejs.renderFile);
server.set('view engine', ejs);

//THIS IS ENDPOINT 1

server.get('/', function(req, res){
    res.send("Hello There Lane Thompson!");
});

server.get('/about', function(req, res){
    res.render('about.html');
});

//ENDPOINT 2

server.get('/Contact', function(req, res){
    res.send("<h1>Contact (Page coming soon...)</h1>");
});

/************ REST API ************************/
server.post('/api/item',function(req, res){
    //code here to save the item
});
/**********************************************/

server.listen(8080, function() {
    console.log("Server running at http://localhost:8080");
});