'use strict'
function prueba(request, response) {
    var nombre = "sin nombre";
    if (request.params.nombre) {
        nombre = request.params.nombre;
    }

    response.status(200).send({data: [1, 2, 3, 4, 5, 6, 7, 8, 9], texto: "Hola " + nombre + " desde NodeJS y Express"});
}

function getFavorito(request, response) {
    console.log(request);
    var favoritoId = request.params.id;

    response.status(200).send({
        data: [1, 2, 3, 4],
        message: "hola desde getFavorito, el id que proporcionaste fue " + favoritoId
    });
}

function getFavoritos(request, response) {
    console.log(request);
    var favoritoId = request.params.id;

    response.status(200).send({
        data: [1, 2, 3, 4],
        message: "hola desde getFavorito, el id que proporcionaste fue " + favoritoId
    });
}

function saveFavorito(request, response) {
    var params = request.body;

    response.status(200).send({favorito: params, saved:true});
}

function updateFavorito(request, response) {
    var params = request.body;

    response.status(200).send({favorito: params,updated:true});
}
function deleteFavorito(request, response) {
    var params = request.body;

    response.status(200).send({favorito: params,deleted:true});
}

module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
};