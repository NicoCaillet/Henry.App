const server = require("express").Router();
const {Grupo} = require("../db");
//crea un grupo
server.post("/nuevo", (req, res, next) =>{
    Grupo.create({
        nombre: req.body.cohorteId + req.body.pm,
        cohorteId: req.body.cohorteId
    }).then(grupo => res.json(grupo))
        .catch(err => next(err));
});

module.exports = server;