const { Router } = require('express');
// import all routers;

const registroRouter = require ('./Registro.js')

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use ('/user', registroRouter);
module.exports = router;
