import express from 'express';
const router = express.Router();
import membership from '../controllers/membership.js';

router.post('/createMembership', membership.createMembership);



export default router;