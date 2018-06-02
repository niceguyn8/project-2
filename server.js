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
