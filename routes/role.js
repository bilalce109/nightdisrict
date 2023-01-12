import express from 'express';
const router = express.Router();
import role from '../controllers/role.js';

router.post('/createrole', role.createRole);



export default router;