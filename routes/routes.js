var express = require('express');
var router = express.Router();
var path = require('path');

var endPointPaths = ['/', '/home', '/news', '/locations', '/about', '/contactus'];
router.get( endPointPaths, (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));

});

var consolePaths = ['/playstation4', '/playstationVita', '/xbox360', '/xboxone',
                  '/3ds', '/wiiu'];

router.get( consolePaths, (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));

});



module.exports = router;
