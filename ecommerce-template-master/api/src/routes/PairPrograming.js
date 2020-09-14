const server = require("express").Router();
const {Pair, Usuario} = require("../db");


server.post("/grupo", (req, res, next) =>{
    Pair.create({
        alumnos: req.body.alumnos,
        cohorteId: req.body.cohorteId,
        grupoId: req.body.grupoId
    }).then(pair => res.json(pair))
        .catch(err => next(err));
});
server.get("/", (req, res, next) =>{
    Pair.findOne({
        where:{
            id: req.user.pairId
        },
        include:{
            model: Usuario,
            as:"usuarios"
        }
    }).then(pair => res.json(pair.usuarios))
        .catch(err => next(err));
});



module.exports = server;