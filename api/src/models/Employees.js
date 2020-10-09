const S = require('sequelize');
const Employees = (sequelize, S) => {
    // defino el modelo

    const E = sequelize.define('employee', {
        idEmployee: {
            primaryKey: true,
            type: S.INTEGER,
            unique: true,
            allowNull: false,
            autoIncrement: true,
        },
        firstName: {
            allowNull: false,
            type: S.STRING,
        },
        lastName: {
            allowNull: false,
            type: S.STRING,
        },
        position: {
            allowNull: false,
            type: S.STRING,
        },
        birthDate: {
            type: S.DATEONLY,
            allowNull: true,
            validate: {
              isDate: false,
              dateValidator(value) {
                let ageCheck = new Date();
                ageCheck.setFullYear(ageCheck.getFullYear() - 18);
                let birthDate = new Date(value);
                if (ageCheck < birthDate) {
                  throw new Error("Nao esta permitido registrar a Funcionarios menores de 18 anos");
                }
              }
            },
        },
        salary: {
            type: S.DECIMAL(10, 2),
            allowNull: false,
        },
        description: {
            allowNull: false,
            type: S.STRING,
        },        
    }, { timestamps: false });

    return E;
};

module.exports = Employees;