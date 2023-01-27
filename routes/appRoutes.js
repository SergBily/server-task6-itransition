import express from 'express';
import { loginController } from '../controllers/loginController.js';
import cors from 'cors';

 export const router = express.Router();

router.post('/login', loginController.login)
router.post('/users', loginController.login)