import express from 'express';
import { signUp,logIn } from '../controller/user-controller.js';
import { verifyUser } from '../middleware/middleware.js';

const route = express.Router();

route.post('/signup',signUp);
route.post('/login',verifyUser,logIn);

export default route;