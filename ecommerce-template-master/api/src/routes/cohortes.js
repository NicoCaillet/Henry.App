const server = require("express").Router();
const {Cohorte} = require("../db");


server.post("/nuevo", (req, res, next) =>{
    Cohorte.create({
        fecha: Date.now()
    }).then(cohorte => res.json(cohorte))
        .catch(err => next(err));
})
module.exports = server;