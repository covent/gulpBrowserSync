'use strict';

// simple express server
var express = require('express');
var app = express();

app.use(express.static('./'));
app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
    // res.send('<html><head><title>Welcome!!!</title><head><body>Benvenuto!!!!</body></html>');
});

app.listen(5000, function () {
    console.log('Example app listening on port 3000!');
});

