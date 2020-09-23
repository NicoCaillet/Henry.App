const server = require("express").Router();
const {Grupo} = require("../db");
//crea un grupo
server.get("/cohorte/:cohorteId", (req, res, next) =>{
    Grupo.findAll({
        attributes:{
            exclude: ["updatedAt"]
        },
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
server.put("/editar", (req, res, next) =>{
    Grupo.update({
        nombre: req.body.nombre,
        cohorteId: req.body.cohorteId
    },{ where: { id: req.body.id } }).then(grupo => res.json(grupo))
        .catch(err => next(err));
})
server.delete("/eliminar/:id", (req, res, next) =>{
    Grupo.destroy({ where: {
        id: req.params.id
    } }).then(grupo => res.json(grupo))
        .catch(err => next(err));
})
module.exports = server;