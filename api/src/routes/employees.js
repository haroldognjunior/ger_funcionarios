const { Router } = require("express");
const server = require("express").Router();
const router = Router();
const { Op } = require("sequelize");
const { Users, Employees } = require("../models/index.js");

//Listar todos os funcionarios

server.get('/', function(req, res) {
    Employees.findAll()
        .then(function(message) {
            return res.status(200).send(message); 
        });
});

//Listar os detalhes de um determinado funcionario

server.get('/:idEmployee', function(req, res) {

    Employees.findOne({ where: { idEmployee: req.params.idEmployee } })

    .then((funcionario) => {
        return res.send(funcionario)

    })
})

//Cadastrar um novo funcionario por um determinado usuario
server.post('/:idUser', function(req, res) {

    var employee = function(){
        return Employees.create({                   
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            position:req.body.position,
            birthDate:req.body.birthDate,
            salary:req.body.salary,
            description:req.body.description
        })
    }

    var user = function() {
        return Users.findOne({
            where: {
                idUser: req.params.idUser
            }
        })
    }

    Promise.all([employee(), user()]).then((response) => {
        if (response[0] && response[1]) {
            response[1].addEmployees(response[0]);
            return res.send('Funcionario incluído com sucesso');
        } else {
            return res.send('Funcionario não incluído')
        }
    })    
});

//Eliminar um funcionario pela id
server.delete('/:id', function(req, res) {
    Employees.destroy({
        where: {
            idEmployee: req.params.id,
        }
    }).then(() => {
        return res.send('O funcionario foi eliminado');
    });
});

//Modificar dados de um funcionario pela id
server.put('/editar/:id', function(req, res) {
    
    Employees.findOne({
            where: {
                idEmployee: req.params.id,
            }
        }).then(function(funcionario) {
            funcionario.update({
                idEmployee: req.body.idEmployee,           
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                position:req.body.position,
                birthDate:req.body.birthDate,
                salary:req.body.salary,
                description:req.body.description
            })
        })
        .then(() => {
            return res.send('Dados modificados')
        })
        .catch(() => {
            return res.status(400).send('Erro ao modificar dados');
        })
});

module.exports = server;