const server = require('express').Router();
const {Usuario} = require ('../db.js')
const passport = require('passport');
const crypto = require("crypto");
//crear usuario
//http://localhost:3006/user/
server.post('/', async(req, res, next) => {

		/* 
		const {email, password,apellido,nombre,rol,proceso, active} = req.body;
		Usuario.create({
			email,
			nombre,
			apellido,
			password,
			rol: "alumno",
			proceso: "1",
			active
        }).then(user => res.status(201).send(user))
		.catch (err => next(err)); 
		*/
		const salt = crypto.randomBytes(64).toString("hex");
		try {
			const {email, password,apellido,nombre,rol,proceso, active} = req.body;
			const passwordHash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("base64");
			 const user = await Usuario.create({
				email,
				nombre,
				apellido,
				password: passwordHash,
				rol: "alumno",
				proceso: "1",
				salt,
				active
			});
			 if (user) {
				passport.authenticate("local", function (err, user, info) {
					if (err) {
						return next(err);
					}
					if (!user) {
						return res.status(401).json({ status: "error", message: info.message });
					}
					req.login(user, function (err) {
						if (err) {
							return next(err);
						}
						return res.json({ status: "ok", user: req.user, isAuth: req.isAuthenticated() });
					});
				})(req, res, next);
			}
		} catch (err) {
			console.log({ err });
			return res.status(500).json({ status: "error", message: "Error, el email ya existe.", input: "email", err });
		}
});
server.post("/login", async (req, res, next) =>{
	passport.authenticate("local", function (err, user, info) {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.status(401).json({ status: "error", message: info.message, input: info.input });
		}
		req.login(user, function (err) {
			if (err) {
				return next(err);
			}
			return res.json({ status: "ok", user, isAuth: req.isAuthenticated() });
		});
	})(req, res, next);
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
server.put('/:id/delete', (req,res)=>{
	const id= req.params.id
	Usuario.update({
		active: false
	}, {where:{
		id: id
	}}).then(response=>{
		res.send(response)
	}).catch(response=>{
		res.send(response)
	})
})
/* server.delete('/:id', (req, res) => {
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
}); */

module.exports = server;