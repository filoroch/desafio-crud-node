const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/users', userController.create);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.findById);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

module.exports = router;


