// Install modules
var express = require('express');
var http = require('http');
var app = express();

// Route views
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', {title:'Express Served Page'});
});

// Route static files
app.use(express.static(__dirname + '/public'));

// Start server
app.listen(1337);