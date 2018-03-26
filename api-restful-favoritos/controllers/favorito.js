'use strict'

var Favorito = require('../models/favorito');
function prueba(request, response) {
    var nombre = "sin nombre";
    if (request.params.nombre) {
        nombre = request.params.nombre;
    }

    response.status(200).send({data: [1, 2, 3, 4, 5, 6, 7, 8, 9], texto: "Hola " + nombre + " desde NodeJS y Express"});
}

function getFavorito(request, response) {
    var favoritoId = request.params.id;

    Favorito.findById(favoritoId, function (err, favorito) {
        if (err) {
            response.status(500).send({message: 'Error al devolver el marcador'});
        } else {
            if (!favorito) {
                response.status(404).send({message: 'No se encontro el marcador'});
            } else {
                response.status(200).send({favorito});
            }
        }

    });
}

function getFavoritos(request, response) {
    Favorito.find({}).sort('title').exec((err, favoritos) => {
        if (err) {
            response.status(500).send({message: 'Error al devolver marcadores'});
        } else {
            if (!favoritos) {
                response.status(404).send({message: 'No hay marcadores'});
            } else {
                response.status(200).send({favoritos});
            }

        }
    });

}

function saveFavorito(request, response) {
    var favorito = new Favorito();

    var params = request.body;
    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;

    favorito.save((err, favoritoStored) => {
        if (err) {
            response.status(500).send({message: 'Error al guardar el marcador'});
        } else {
            response.status(200).send({favorito: favoritoStored});
        }
    });

//    response.status(200).send({favorito: params, saved: true});
}

function updateFavorito(request, response) {
    var favoritoId = request.params.id;
    var update = request.body;

    Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdated) => {
        if (err) {
            response.status(500).send({message: 'Error al devolver el marcador'});
        } else {
            response.status(200).send({favoritoUpdated});
        }
    });
}

function deleteFavorito(request, response) {
    var favoritoId = request.params.id;

    Favorito.findById(favoritoId, function (err, favorito) {
        if (err) {
            response.status(500).send({message: 'Error al devolver el marcador'});
        } else {
            if (!favorito) {
                response.status(404).send({message: 'No se encontró el marcador'});
            } else {
                favorito.remove(err => {
                    if (err) {
                        response.status(500).sende({message: 'Error al eliminar el marcador'});
                    } else {
                        response.status(200).sende({message: 'El marcador se ha eliminado!'});
                    }
                });
            }
        }
    });
}

module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
};