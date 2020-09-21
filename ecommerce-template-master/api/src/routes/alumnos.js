const server = require("express").Router();
const {Usuario, Cohorte, Grupo} = require("../db");
const {Op} = require("sequelize");
//get de todos los alumnos
server.get("/", (req, res, next) =>{
    Usuario.findAll({
        attributes:{
            exclude:["password", "provider", "providerId", "salt", "rol", "createdAt", "updatedAt" ]
        },
        where:{
            rol: "alumno"
        }
    }).then(alumnos => res.json(alumnos))
      .catch(err => next(err));
})
//get de todos los alumnos de un cohorte
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
//trae alumnos de un grupo pm
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
//actualiza el grupo de un alumno
server.put("/grupo/agregar", (req, res, next) =>{
    Usuario.findByPk(req.body.usuarioId)
.then(usuario => {usuario.grupoId = req.body.grupoId;
return usuario.save()
}).then(usuario => res.json(usuario))
    .catch(err => next(err));
})
//actualiza el cohorte de un grupo
server.put("/cohorte/agregar", (req, res, next) => {
    Usuario.findByPk(req.body.usuarioId)
    .then(usuario => {usuario.cohorteId = req.body.cohorteId;
        return usuario.save();
    }).then(usuario => res.json(usuario))
        .catch(err => next(err));
})
//crea un usuario con solo email
server.post('/agregar', (req, res, next) => {
    const addEmails = req.body.emails.map(email => {
        return Usuario.create({
            email: email,
            rol: 'alumno',
            active: true
        })
    })
    Promise.all(addEmails).then(() => res.send('OK'))
    .catch( err => next(err))
})
//trae todos los grupos pp de un cohorte
server.get ("/grupopm/:cohorte", (req,res,next) => {
    Grupo.findAll({
        where : {
            "$cohorte.id$": req.params.cohorte
        },
        include: {
            model : Cohorte,
            as : "cohorte"
        }
    }).then(grupo => res.json(grupo))
    .catch(err => next(err))
})

module.exports = server;