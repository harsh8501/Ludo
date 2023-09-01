import express from 'express';
import { signUp } from '../controller/user-controller.js';

const route = express.Router();

route.post('/signup',signUp);
//route.post('/login',logIn);

export default route;