import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js'
import Connection from "./database/db.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 8000;

const url = process.env.URL;

Connection(url);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

app.use('/api/user',userRoutes);