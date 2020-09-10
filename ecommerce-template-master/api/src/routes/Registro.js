const server = require('express').Router();
const {Usuario} = require ('../db.js')

//crear usuario
server.post('/', (req, res) => {
		const {email, password,apellido,nombre,rol,proceso} = req.body;
		Usuario.create({
			email,
			nombre,
			apellido,
			password,
			rol,
			proceso,
        }).then(user => res.status(201).send(user))
        .catch (err => res.send(err));
});

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
//actualiza informacion del usuario que no esta en el registro.
server.put('/:id', (req, res) => {
	var newEmail = req.body.email;
	var {edad,localidad} = req.body;
	console.log(req.body);
	Usuario.findOne({
		where: {
			id: req.params.id,
		},
	})
		.then(user => {
			user.update({
				email: newEmail,
				localidad: localidad,
				edad: edad,
			});
			//user.save();
			res.status(200).send(user);
		})
		.catch(err => {
			res.send('Usuario inexistente');
		});
});
//borra usuario
server.delete('/:id', (req, res) => {
	Usuario.findOne({
		where: {
			id: req.params.id,
		},
	})
		.then(user => {
			if (!user) {
				res.send('Usuario inexistente');
			} else {
				//if (req.params.id == req.user.id) {
					//req.logout();
				//}
				user.destroy();
				res.status(200).send(user);
			}
		})
		.catch(err => {
			console.log(err);
		});
});

module.exports = server;