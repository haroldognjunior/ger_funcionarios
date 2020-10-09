const server = require('express').Router();
const { Employees, Users } = require('../models');
const Sequelize = require('sequelize');

server.get('/', function(req, res) {
    
    Users.create ({
        firstName: 'Vitor',
        email: 'vitor@3lminformatica.com.br',
        password: '12345678'
    })
    
    Employees.create ({
        firstName: "Juan",
        lastName: "Guedes",
        position: "Diretor",
        birthDate: "2000-10-10",
        salary: "2000",
        description: "Diretor do setor comercial, responsável pela supervisão de 3 colaboradores",
        userIdUser: 1
    }) 

   
    
    res.send("Dados carregados com sucesso!");
});

module.exports = server;