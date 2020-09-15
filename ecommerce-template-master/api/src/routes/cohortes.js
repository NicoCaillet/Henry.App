const server = require("express").Router();
const {Cohorte} = require("../db");
const moment = require("moment")
server.get("/", (req, res, next) =>{
    Cohorte.findAll()
        .then(cohorte => res.json(cohorte))
        .catch(err => next(err));
})
server.post("/nuevo", (req, res, next) =>{
    const Validfecha = moment(req.body.fecha, "DD/MM/YYYY").isValid();
    if(!Validfecha) res.status(500).json({ msg:"Formato de fecha invalido" });
     Cohorte.create({
        fecha: moment(req.body.fecha, "DD/MM/YYYY").format(),
        nombre: req.body.nombre
    }).then(cohorte => res.json(cohorte))
        .catch(err => next(err));
})

module.exports = server;
