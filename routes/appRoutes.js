import express from 'express';
import { loginController } from '../controllers/loginController.js';
import { usersController } from '../controllers/userController.js';
import { messageController} from '../controllers/messageController.js'

 export const router = express.Router();

router.post('/login', loginController.login)
router.post('/logout', loginController.logout)
router.get('/users', usersController.getUsers)
router.post('/message/get', messageController.getMessages)
router.post('/message/getSended', messageController.getSendedMessages)