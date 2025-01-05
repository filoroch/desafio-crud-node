const {Low, JSONFile} = require('lowdb');
const path = require('path');

// Caminho para o JSON que ta armazenando os dados
const file = path.join(__dirname, 'database.json');
const adapter = new JSONFile(file);

const db = new Low(adapter);

const initializeDB = async () => {
    await db.read(); // Carrega os dados do arquivo;
    db.data = {users : [], employers: [], departaments: [], roles: [] }; // Estrutura do JSON
    await db.write(); // Salve os dados no arquivo
};

initializeDB();

module.exports = db;