import helper from '../utils/helpers.js'; 
import express from 'express';
import userController from '../controllers/users.js';
const router = express.Router();

router.get('/home', userController.home);
router.post('/', userController.register);
router.post('/login', userController.login);
router.post('/selectMembership' ,  helper.verifyAuthToken, userController.selectMembership);
router.put("/cardDetail" ,helper.verifyAuthToken, userController.cardDetail);
router.put("/barProfile" ,helper.verifyAuthToken, userController.barProfile);
router.put("/barInfo" ,helper.verifyAuthToken, userController.barInfo);

export default router;