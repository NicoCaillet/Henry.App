const server = require("express").Router();
const {Cohorte} = require("../db");
const moment = require("moment")

server.get("/", (req, res, next) =>{
    Cohorte.findAll()
        .then(cohorte => res.json(cohorte))
        .catch(err => next(err));
})


server.get("/:id", (req, res, next) =>{
    const id = req.params.id
    Cohorte.findAll({  
        where:{
        id: id,
    },
    include:{
        model: Usuario,
        as: "usuario"
    }})
        .then(cohorte => res.json(cohorte))
        .catch(err => next(err));
})



server.post("/nuevo", (req, res, next) =>{
     Cohorte.create({
        fecha: req.body.fecha, 
        nombre: req.body.nombre
    }).then(cohorte => res.json(cohorte))
        .catch(err => next(err));
})

module.exports = server;
