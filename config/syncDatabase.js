const sequelize = require('./database'); // Importando do mesmo diretório
const User = require('../models/User'); // Caminho relativo para o model
const Employee = require('../models/Employee');
const Departament = require('../models/Departament');

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true }); // Recria as tabelas no SQLite
        console.log('Banco de dados sincronizado com sucesso!');
    } catch (error) {
        console.error('Erro ao sincronizar o banco de dados:', error);
    } finally {
        await sequelize.close(); // Fecha a conexão
    }
};

syncDatabase();

