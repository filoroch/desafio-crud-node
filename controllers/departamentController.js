const Departament = require('../models/Departament');
const { response } = require('express');

const departamentController = {
    create: async (req, res) => {
        try{
            const {name, description, location, status} = req.body;
            if (!name || !location){
                return res.status(400).json({error: 'Todos os campos são obrigatorios'});
            }
            console.log('Dados recebidos:', {name, description, status, location});
            
            const newDepartament = await Departament.create({name, description, location, status});
            console.log('Departamento criado:', newDepartament);
            
            res.status(201).json(newDepartament);
        } catch (error){
            console.log(error);
            res.status(500).json({error: 'Erro ao criar departamento'});
        };
    },
    getAllDepartaments: async (req, res) => {
        try{
            const departaments = await Departament.findAll();
            res.status(200).json(departaments);
        } catch (error){
            console.error(error);
            res.status(500).json({error: 'Erro ao buscar departamentos'});
        }
    },
    findById: async (req, res) => {
        try {
            const {id} = req.params;
            const findDepartament = await Departament.findByPk(id);

            if (!findDepartament) return res.status(400).json({error: 'Deparamento não encontrado'})
            
            res.status(200).json(findDepartament);
        } catch (error){
            console.error(error);
            res.status(500).json({error: 'Erro ao buscar departamento'})
        }   
    },
    update: async (req, res) => {
        try{
            const {id} = req.params;
            const {name, description, location, status} = req.params;
            const updateDepartament = await Departament.findByPk(id);

            if (!updateDepartament) return res.status(400).json({error: 'Departamento não encontrado'});
            
            // Verifica se os novos valores são diferentes dos atuais e modifica-os
            if(name !== updateDepartament.name) updateDepartament.name = name;
            if(description !== updateDepartament.description) updateDepartament.description = description;
            if(location !== updateDepartament.location) updateDepartament.location = location;
            if(status !== updateDepartament.status) updateDepartament.status = status;

            await updateDepartament.save();

            res.status(200).json(updateDepartament);
        } catch (error){
            console.error(error);
            res.status(500).json({error: 'Erro ao editar departamento'});
        }
    },
    delete: async (req, res) => {
        try{
            const {id} = req.params;
            const deleteDepartament = await Departament.findByPk(id);

            if (!deleteDepartament) return res.status(400).json({error: 'Departamento não encontrado'});
            
            await deleteDepartament.destroy();
        } catch (error){
            console.error(error);
            res.status(500).json({error: 'Erro ao apagar departamento'})
        }
    }
};

module.exports = departamentController;