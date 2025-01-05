const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Departament = sequelize.define('Departament', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('Active' , 'Inactive'),
        allowNull: false,
        defaultValue: 'Active'
    },
});

module.exports = Departament;