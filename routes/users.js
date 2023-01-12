import helper from '../utils/helpers.js'; 
import express from 'express';
import userController from '../controllers/users.js';

// import multer from 'multer';
// let storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './upload/profilePic');
//     },
//     filename: function (req, file, cb) {
//         cb(null , Date.now()+file.originalname);
//     }
// });
// let upload = multer({ storage: storage })



const router = express.Router();

router.get('/home', userController.home);
export default router;