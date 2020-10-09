const Users = (sequelize, S) => {
  // defino o modelo
  const U = sequelize.define(
    "users",
    { 
      idUser: {
        primaryKey: true,
        type: S.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },   
      firstName: {
        type: S.STRING,
        allowNull: true,
      },  
      email: {
        type: S.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: S.STRING,
        allowNull: false,
        validate: {
          min: 6,
        },
      },
         
    },
    {
      timestamps: false,
    }
  );

  return U;
};

module.exports = Users;
