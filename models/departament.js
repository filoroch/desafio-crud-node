const db = require('database/connection');
const awaitDbRead = await db.read();

const Departament = {
    getAll: async () => {
        awaitDbRead;
        return db.data.departaments;
    },
    findById: async (id) => {
        awaitDbRead;
        return db.data.employers.find((departament) => departament.id === id);
    },
    create: async (departamentData) => {
        const newDepartament = {...departamentData, id: Date.now.toString()};
        awaitDbRead;
        db.data.departaments.push(newDepartament);
        await db.write();
    }
}