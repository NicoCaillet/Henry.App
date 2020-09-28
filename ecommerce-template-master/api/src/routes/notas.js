const server = require("express").Router();
const {Nota, Usuario} = require("../db.js");
const {Op} = require("sequelize");

server.post("/nueva", async (req, res, next) => {
    try{
           const nota = await Nota.create({
                nota: req.body.nota,
                correctorId: req.user.id,
                evaluadoId: req.body.evaluadoId,
                modulo: req.body.modulo
            });
            if(nota.nota >= 7){
                Usuario.increment(['proceso'], { by: 1, where: { id: req.body.evaluadoId, proceso : {[Op.lt]: 4}}});
                res.sendStatus(200);
            }
    }catch(err){
        next(err);
    }
});
module.exports = server;