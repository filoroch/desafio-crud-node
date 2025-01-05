const db = require('database/connection');
const awaitDbRead = await db.read();

const Employee = {
    getAll: async () => {
        awaitDbRead;
        return db.data.employers;
    },
    findById: async (id) => {
        awaitDbRead;
        return db.data.employers.find((employee) => employee.id === id);
    },
    create: async (employeeData) => {
        const newEmployee = {...employeeData, id: Date.now().toString()};

        awaitDbRead;
        db.data.employers.push(newEmployee);
        await db.write();

        return newEmployee;
    },
    update: async (id, updates) => {
        awaitDbRead;
        const employee = db.data.employers.find((emp) => emp.id === id);

        if (!employee) return null;

        Object.assign(employee, updates);
        await db.write();

        return employee;
    },
    delete: async (id) => {
        awaitDbRead;
        db.data.employers = db.data.employers.filters((emp) => emp.id !== id);
        await db.write();
    },
};

module.exports = Employee;