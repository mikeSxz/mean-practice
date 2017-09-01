'use strict'

var express = require('express');
var bodyParser = require('body-parser');


var app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/prueba/:nombre?", (request, response) => {
    var nombre = "sin nombre";
    if (request.params.nombre) {
        nombre = request.params.nombre;
    }

    response.send({data: [1, 2, 3, 4, 5, 6, 7, 8, 9], texto: "Hola " + nombre + " desde NodeJS y Express"});
});

module.exports = app;