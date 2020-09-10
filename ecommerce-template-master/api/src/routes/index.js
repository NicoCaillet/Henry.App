const { Router } = require('express');
// import all routers;
const alumnosRouter = require('./alumnos.js');
const gruposRouter = require('./grupos.js');
const cohortesRouter = require('./cohortes.js');


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/alumnos', alumnosRouter);
router.use('/grupos', gruposRouter);
router.use('/cohortes', cohortesRouter);

module.exports = router;
