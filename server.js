<<<<<<< HEAD
<<<<<<< HEAD
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended:false
}))

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


var routes = require('./controllers/controller.js');
app.use('/', routes);

var port = process.env.PORT || 3000;
// var port = process.env.PORT
app.listen(port);
=======


// app.use(express.static('public'))
var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/controller.js");
app.use(routes);
>>>>>>> master
=======
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/controller.js");
app.use(routes);


>>>>>>> master
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
>>>>>>> master
