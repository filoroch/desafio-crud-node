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
    
}