import helper from '../utils/helpers.js'; 
import express from 'express';
import Bar from '../controllers/bar.js';
const router = express.Router();


router.put("/barProfile" ,helper.verifyAuthToken, Bar.barProfile);
router.put("/barInfo/:id" , helper.verifyAuthToken, Bar.barInfo);
router.put("/detailInfo/:id" ,helper.verifyAuthToken, Bar.detailInfo);
router.put("/allInfo/:id" ,helper.verifyAuthToken, Bar.updateBarInfo);

export default router;