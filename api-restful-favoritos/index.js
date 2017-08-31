'use strict'

var express = require('express');

var app = express();

app.listen(3678, function () {
    console.log('API REST FAVORITOS funcionando en http://localhost:3678');
});