import dotenv from 'dotenv'
import http from 'http';
import app from './config';
import { Request, Response, request, response } from 'express';


const nomeApp = ["Worksearch"]

dotenv.config({ path: `.env` })



const port = process.env.PORT;

console.log(`${nomeApp} vai rodar na porta http://localhost:${port}`);

const server = http.createServer(app);

server.listen(process.env.PORT, () => "Servidor Inicializado");
