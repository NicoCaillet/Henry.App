const server = require("express").Router();
const {Usuario, Cohorte, Grupo} = require("../db");
const {Op} = require("sequelize");
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
server.get("/pm/:pm", async(req, res, next) =>{
    const pm = await Usuario.findOne({
        where:{ nombre: req.params.pm }
    })
    Grupo.findOne({
        where:{
            id: pm.grupoId,
            "$usuarios.id$":{[Op.not]:pm.id}
        },
        include:{
           model: Usuario,
           as: "usuarios"
        }
    }).then(grupo =>{
        res.json(grupo.usuarios);
    })
    .catch(err => next(err));
});
server.put("/cohorte/agregar", (req, res, next) => {
    Usuario.update({
        cohorteId: req.body.cohorteId
    }, {
        where: {
            id: req.body.usuarioId
        }
    }).then(usuario => res.json(usuario))
        .catch(err => next(err));
})
module.exports = server;