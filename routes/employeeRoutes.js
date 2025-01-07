const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

router.post('/employers', employeeController.create);
router.get('/employers', employeeController.getAllEmployers);
router.get('/employers/:id', employeeController.findByID);
router.get('/employers/', employeeController.findByCPF);
router.get('/employers/:departament', employeeController.findByDepartaments);
router.delete('/employers/:id', employeeController.delete);
router.put('/employers/:id', employeeController.update);

module.exports = router;