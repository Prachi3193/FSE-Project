const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// CRUD operations for users
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id/password', userController.updatePassword);
router.delete('/:id', userController.deleteUser);

module.exports = router;
