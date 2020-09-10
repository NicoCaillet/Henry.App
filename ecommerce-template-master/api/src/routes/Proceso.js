const server = require('express').Router();
const {Usuario} = require ('../db.js')



//actualiza el proceso de un alumno
server.post ('/:id/proceso', (req,res,next) => {
    const 
})
//actualiza el rol de un usuario
server.put('/:id/rol', (req, res, next) => {
    const { id } = req.params;
    const { rol} = req.body;
    Usuario.update(
        {
		rol
		},
        { where: { id } }
    ).then((usuario) => {
        res.status(200).send(usuario);
    }).catch(next);
});