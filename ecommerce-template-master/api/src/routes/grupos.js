const server = require("express").Router();
const {Grupo} = require("../db");
//crea un grupo
server.get("/cohorte/:cohorteId", (req, res, next) =>{
    Grupo.findAll({
        where:{
            cohorteId: req.params.cohorteId
        }
    }).then(grupos => res.json(grupos))
    .catch(err => next(err));
})
server.post("/nuevo", (req, res, next) =>{
    Grupo.create({
        nombre: req.body.cohorteId + req.body.pm,
        cohorteId: req.body.cohorteId
    }).then(grupo => res.json(grupo))
        .catch(err => next(err));
});

module.exports = server;