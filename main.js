var express = require("express");
var path = require('path');
var logger = require('morgan');
var app = express();
const PORT = 9500;

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger());

app.get('/get_keys', function(req, res) {
    res.sendfile('public/html/create_api_keys.html');
});

app.listen(PORT, function () {
    console.log("Listening on " + PORT);
});
