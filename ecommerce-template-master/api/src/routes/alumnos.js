const server = require("express").Router();
const {Usuario, Cohorte, Grupo} = require("../db");
server.get("/cohorte/:cohorte", (req, res, next) =>{
    Usuario.findAll({
        where:{
            rol: "alumno",
            "$cohorte.id$": req.params.cohorte
        },
        include:{
            model: Cohorte,
            as: "cohorte"
        }
    }).then(usuario => res.json(usuario))
        .catch(err => next(err));
});
server.get("/pm/:pm", (req, res, next) =>{
    Grupo.findAll({
        where:{
            "$usuarios.nombre$": req.params.pm
        },
        include:{
           model: Usuario,
           as: "usuarios"
        }
    }).then(grupo =>{
        const alumnos = grupo.usuario.filter(usuario => usuario.rol != "pm")
        req.json(alumnos);
    })
    .catch(err => naxt(err));
});
server.put("/cohorte/agregar", (req, res, next) => {
    Usuario.update({
        where: req.body.usuarioId
    },{
        cohorteId: req.body.cohorteId
    }).then(usuario => res.json(usuario))
        .catch(err => next(err));
})
module.exports = server;