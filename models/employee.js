const {DataTypes} = require('sequelize');
const sequelize = require('config/database.db');

const Employee = sequelize.define('Employee',  {
    fullName: {
        type: DataTypes.STRING,
            allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
            allowNull: false,
            unique: true,
    },
    department: {
        type: DataTypes.STRING,
            allowNull: true,
    },
    salary: {
        type: DataTypes.FLOAT,
            allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('Ativo', 'Inativo', 'Em licença'),
            allowNull: false,
    },
});

module.exports = Employee;