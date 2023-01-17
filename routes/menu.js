import express from 'express';
const router = express.Router();
import helper from '../utils/helpers.js'; 
import menu from '../controllers/menu.js';

router.post('/createMenuCategory', helper.verifyAuthToken , menu.createMenuCat);



export default router;