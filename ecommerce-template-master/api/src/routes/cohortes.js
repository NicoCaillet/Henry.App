const server = require("express").Router();
const {Cohorte} = require("../db");

server.get("/", (req, res, next) =>{
    Cohorte.findAll()
        .then(cohorte => res.json(cohorte))
        .catch(err => next(err));
})
server.post("/nuevo", (req, res, next) =>{
    Cohorte.create({
        fecha: Date.now()
    }).then(cohorte => res.json(cohorte))
        .catch(err => next(err));
})

module.exports = server;
