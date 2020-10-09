const server = require("express").Router();
const { Users } = require("../models/index.js");

server.get("/", (req, res) => {
  Users.findAll({
    order: [["idUser", "ASC"]],
  }).then((result) => {
    res.send(result);
  });
});

server.get("/:idUser", (req, res) => {
  const { id } = req.params;
  Users.findOne({
    where: { idUser: id },
  }).then((result) => {
    res.send(result);
  });
});





module.exports = server;
