const User = require('../models/User');
const {response} = require("express");

const userController = {
    create: async (req, res) => {
        try {
            const {name, email, password, role } = req.body;
            if (!name || !email || !password || !role){
                return res.status(400).json({error: 'Todos os campos são obrigatorios'})
            }
            const newUser = await User.create({name, email, password, role});
            res.status(2021).json(newUser);
        }catch (error){
            console.log(error);
            res.status(500).json({error: 'Erro ao criar usuario'});
        }
    },
    getAllUsers:  async (req, res) => {
        try{
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error){
            console.error(error);
            res.status(500).json({error: 'Erro ao buscar usuários'})
        }
    },
    findById: async (req, res) => {
        try {
            const {id} = req.params;
            const findUser = await User.findByPk(id);

            if (!findUser) return res.status(400).json({error: 'Usuario não encontrado!'});
            res.status(200).json(findUser);

        } catch (error){
            console.error(error);
            res.status(500).json({error: 'Erro ao buscar usuários'})
        }
    },
    delete: async (req, res) => {
        try {
            const {id} = req.params;
            const deleteUser = await User.findByPk(id);

            if (!deleteUser) return res.status(400).json({error: 'Usuario não encontrado!'});
            await deleteUser.destroy()
        } catch (error){
            console.error(error);
            res.status(500).json({error: 'Erro ao apagar usuários'})
        }
    }
};

module.exports = userController;