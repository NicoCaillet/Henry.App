const server = require("express").Router();
const {Clase} = require("../db");



server.post("/:id", (req, res, next) =>{
    Clase.create ({
        modulo: req.body.modulo,
        clase: req.body.clase,
        link: req.body.link,
        cohorteId: req.params.id,
    }).then ( clase => res.send(clase))
    .catch (err => next(err))
})

server.get("/:id/:cohorte", (req, res, next) =>{
    Clase.findAll({
        where:{
            modulo: req.params.id,
            cohorteId: req.params.cohorte
        },
    }).then(clase => res.json(clase))
        .catch(err => next(err));
});

module.exports = server;
