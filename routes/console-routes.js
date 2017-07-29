var express = require('express');
var consoleRouter = express.Router();
var path = require('path');

var endPointPaths = ['/playstation4', '/playstationVita'];
consoleRouter.get( endPointPaths, (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));

});


module.exports = consoleRouter;
