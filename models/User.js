const db = require('../database/connection');
const bcrypt = require('bcrypt');

const User = {
    getAll: async () => {
        await db.read;
        return db.data.users;
    },
    findByEmail: async (email) => {
        await db.read();
        return db.data.users.find((user) => user.email === email);
    },
    create: async (userData) => {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const newUser = {...userData, password: hashedPassword, id: Date.now().toString() };

        await db.read();
        db.data.users.push(newUser);
        await db.write();

        return newUser;
    },
};