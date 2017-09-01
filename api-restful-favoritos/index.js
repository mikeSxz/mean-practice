'use strict'

var app = require('./app');
var port = process.env.port || 3678;

app.listen(port, () => {
    console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
    console.log("otro console para validar el cambio automatico con el nodemon");
});