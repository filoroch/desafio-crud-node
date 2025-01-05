const sequelize = require('../config/database'); // Caminho relativo correto
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'guest'),
        allowNull: false,
        defaultValue: 'guest'
    },
}, {
    timestamps: true,
});

module.exports = User;
