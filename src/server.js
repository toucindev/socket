import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

import 'dotenv';
import './dbConnect.js';

const app = express();
const porta = process.env.porta || 3000;

const pasta = url.fileURLToPath(import.meta.url);
const dirPublic = path.join(pasta, '../../', 'public');
app.use(express.static(dirPublic));

const serverHttp = http.createServer(app);

serverHttp.listen(porta, () => console.log(`Servidor escutando na porta ${porta}`));

const io = new Server(serverHttp);

export default io;