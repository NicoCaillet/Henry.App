const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const passport = require('passport');
const cors = require('cors');
const LocalStrategy = require('passport-local').Strategy;
const {Usuario} = require('./db.js');

const crypto = require("crypto");
const server = express();
server.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  allowedHeaders: "Authorization, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method",
  methods: "GET, POST, OPTIONS, PUT, DELETE",
}));
server.name = 'API';
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  async function(email, password, done) {
    try {
      const user = await Usuario.findOne({ where: { email: email, active: true } })
      console.log({user})
      if (!user) {
        return done(null, false, { message: 'Incorrect username.', input : "email" });
      }
			const passwordKey = crypto.pbkdf2Sync(password, user.salt, 10000, 64, 'sha512').toString('base64');
      if(passwordKey === user.password){
        return done(null, user);
			}else{
        return done(null, false, {message: 'Incorrent password', input:"password"})
      }
    } catch (err) {
      return done(err);
    }
  }
));
passport.serializeUser(function(user, done) {
  return done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  Usuario.findByPk(id)
  .then(user=>done(null, user))
  .catch(err => done(err))
});
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
/* server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}); */
server.use(require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
server.use(passport.initialize());
server.use(passport.session());
server.use('/', routes);
// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  return res.status(status).send(message);
});

module.exports = server;
