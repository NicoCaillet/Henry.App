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
    const Validfecha = moment(req.body.fecha, "DD/MM/YYYY").isValid();
    if(!Validfecha) return res.status(500).json({ msg:"Formato de fecha invalido" });
     Cohorte.create({
        fecha: moment(req.body.fecha, "DD/MM/YYYY").format(),
        nombre: req.body.nombre
    }).then(cohorte => res.json(cohorte))
        .catch(err => next(err));
})

module.exports = server;
