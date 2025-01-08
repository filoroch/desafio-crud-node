import Employee from '../models/Employee';
import { response } from 'express'; 

//const employerParams = {fullname, cpf, departament, status}

const employeeController = {
    create: async(req, res) => {
        try{
            const {fullname, cpf, departament, salary, status} = req.body;
            if (!fullname || cpf) return res.status(400).json({error: 'Todos os campos são obrigatorios'});

            console.log('Dados recebidos:', {fullname, cpf, departament, salary, status})

            const newEmployee = await Employee.create({fullname, cpf, departament, salary, status});
            console.log('Funcionario criado:', newEmployee);

            res.status(201).json(newEmployee)
        } catch (error){
        res.status(500).json({error: 'Erro ao criar funcionario'});
        };
    },
    getAllEmployers: async (req, res) => {
        try{
            const Employeers = await Employee.findAll;
            
            if(!Employeers) return res.status(400).json({error: 'Não existe nenhum funcionario'})
        
            res.status(201).json(Employeers)
        } catch (error){
            console.error(error);
            res.status(500).json({error: 'Erro ao listar os funcionarios'})
        }
    },
    findByID: async (req, res) => {
        try{
            const {id} = req.body;
            const findEmployee = await Employee.findByPk(id);

            if(!findEmployee) return res.status(400).json({error: 'Funcionario não encontrado'});
            
            res.status(201).json(findEmployee);
        } catch (error){
            console.error(error);
            res.status(500).json({error: 'Não foi possivel ACHAR o funcionario'});
        }
    },
    findByDepartaments: async (req, res) => {
        try{
            const {departament} = req.params;
            employeeDepartament = Employee.findOne({where: departament});

            if(!employeeDepartament) return res.status(400).json({error: 'Nenhuma condição é verdadeira'})

            res.status(201).json(employeeDepartament)
        } catch (error){
            console.error(error);
            res.status(500).json({error: 'ERRO!'})
        }
    },
    findByCPF: async (req, res) => {
        try{
            const {cpf} = req.body;
            const findByCpf = await Employee.findOne({where: cpf});

            if(!findByCpf) return res.status(400).json({error: 'Funcionario não encontrado'});

            res.status(201).json(findByCpf);
        } catch (error){
            console.error(error);
            res.status(500).json({error: 'Não foi possivel achar o funcionario. Revise o CPF'})
        }
    },
    update: async (req, res) => {
        try{
            const {id} = req.body;
            const {fullname, cpf, departament, status} = req.body;
            const updateEmployee = await Employee.findByPk(id);

            if(!updateEmployee) return res.status(400).json({error: 'Funcionario não encontrado'})
        
            updateEmployee.update(fullname, cpf, departament, status); // testar e ver nos outros codigos

            await updateEmployee.save();
            res.status(201).json(updateEmployee);
        } catch (error){
            console.error(error);
            res.status(500).json({error: 'Não foi possivel atualizar o funcionario'});
        }
    },
    delete: async (req, res) => {
        const {id} = req.params;
        const deleteEmployee = await Employee.findByPk(id);
        
        if(!deleteEmployee) return res.status(400).json({error: 'Funcionario não registrado/encontrado'});

        await deleteEmployee.destroy;
    }
};

module.exports = employeeController;