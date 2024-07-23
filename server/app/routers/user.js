const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { checkLogin } = require('../middleware/auth');


router.get('/', checkLogin, userController.getAllUsers);
router.get('/:id', checkLogin, userController.getUserById);
router.post('/change-password', checkLogin, userController.changePassword);
router.put('/update-user', checkLogin, userController.updateUser);
router.delete('/delete-user', checkLogin, userController.deleteUser)

module.exports = router;