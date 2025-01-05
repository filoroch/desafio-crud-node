const {DataTypes} = require('sequelize');
const sequelize = require('config/database');

const Roles = sequelize.define('Roles', {
   name: {
       type: DataTypes.STRING,
       allowNull: false
   },
    descricao: {
       type: DataTypes.STRING,
        allowNull: true
    },
    departament: {
       type: DataTypes.STRING,
        allowNull: false,
    },
    roleLevel: {
       type: DataTypes.ENUM('Jr', 'Senior', 'Pleno', 'N/A'),
        allowNull: false,
        defaltValue: 'Jr'
    },
    budget: {
       type: DataTypes.DOUBLE,
        allowNull: false,
    },
    requeriments: {
       type: DataTypes.STRING,
        allowNull: true,
    },
    beneficios: {
       type: DataTypes.STRING,
        allowNull: true,

    },
    status: {
       type: DataTypes.ENUM('Active', 'Inactive'),
        allowNull: false,
        defaltValue: 'Active'
    }
});

module.exports = Roles;