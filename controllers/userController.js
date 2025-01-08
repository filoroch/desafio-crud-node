import User from '../models/User';
import { response } from 'express';
import bcrypt from 'bcrypt';

const userController = {
    create: async (req, res) => {
        try {
            const {name, email, password, role} = req.body;
            if (!name || !email || !password ){
                return res.status(400).json({error: 'Todos os campos são obrigatorios'})
            }
            console.log('Dados recebidos:', { name, email, password }); // Log dos dados
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({name, email, password: hashedPassword, role});
            console.log('Usuário criado:', newUser); // Log do resultado

            res.status(201).json(newUser);
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
    update: async (req, res) => {
      try{
          const {id} = req.params;
          const {name, email, password, role} = req.body;
          const user = await User.findByPk(id);

          if (!user) return res.status(400).json({error: 'Usuario não encontrado!'});

          // Verifica os novos valores e os modifica
          if(name !== user.name) user.name = name;
          if(email !== user.email) user.email = email;
          if(password !== user.password) user.password = password;
          if(role !== user.role) user.role = role;

          await user.save();

          res.status(200).json(user);
      }catch (error) {
          console.error(error);
          res.status(500).json({error: 'Erro ao editar usuários'})
      }
    },
    delete: async (req, res) => {
        try {
            const {id} = req.params;
            console.log('ID do usuário:', id); // Log do ID
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