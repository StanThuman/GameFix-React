var express = require('express'); //require is a node function to load modules
var router = express.Router();
var favicon = require('serve-favicon');
var app = express();
var path = require('path');


//app.use('/styles', path.resolve('./semantic/dist/'));
app.use(express.static(__dirname + '/semantic/dist/'));
app.use(express.static(__dirname + '/dist'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static(__dirname + '/public/images/'));


//routing for index
app.use('/', require('./routes/routes.js'));
//app.use('/consoles', require('./routes/console-routes.js'));

app.listen(process.env.PORT || 5000, () => {
  console.log(" - Server:5000 start successful");
});
