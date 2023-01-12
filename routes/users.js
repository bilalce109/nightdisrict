import helper from '../utils/helpers.js'; 
import express from 'express';
import userController from '../controllers/users.js';
const router = express.Router();

router.get('/home', userController.home);
router.post('/', userController.register);
router.post('/login', userController.login);

export default router;