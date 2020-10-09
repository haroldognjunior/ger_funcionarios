const server = require("express").Router();
const passport = require("passport");
const { Users } = require("../models/index.js");



//fazer login
server.post('/login',
    passport.authenticate('local'),
    function(req, res) {     
        res.json(req.user)

    }
);
 
server.get('/login', 
    function(req, res) {
        res.json(req.user)

    }
);

//fazer logout
server.get("/logout", function (req, res, next) {
  req.logout();
  req.session = null;
  res.sendStatus(200);
});

//criar um usuário
server.post('/register', function(req, res) {
  Users.create({
          firstName: req.body.firstName,
          email: req.body.email,
          password: req.body.password
          
      })
      .then(() => {
          return res.send('Usuário criado')
      })
      .catch(() => {
          return res.status(400).send('Já existe o usuário')
      })
});



//traz infos do perfil do usuário
server.get("/me");
server.get("/profileuser", (req, res) => {
  Users.findOne({
    where: {
      idUser: req.user.idUser,
    },
  }).then((result) => {
    if (result === null) {
      res.send("usuário não encontrado");
    } else {
      res.send(result);
    }
  });
});


module.exports = server;
