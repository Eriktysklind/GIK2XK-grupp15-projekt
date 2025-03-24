var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Headers', '*');
    res.header('Acess-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
});
///app.use(express.static(path.join(__dirname, 'public')));
app.use("/product", require("./routes/productRoute"));
app.use("/users", require("./routes/userRoute"));

module.exports = app;
