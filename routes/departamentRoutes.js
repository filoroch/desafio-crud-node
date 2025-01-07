const express = require('express');
const departamentController = require('../controllers/departamentController');

const router = express.Router();

router.post('/departaments', departamentController.create);
router.get('/departaments', departamentController.getAllDepartaments);
router.get('/departaments/:id', departamentController.findById);
router.put('/departaments/:id', departamentController.update);
router.delete('/departaments/:id', departamentController.delete);
// Adicionar um router e uma função do controller para alterar varios departamentos

module.exports = router;