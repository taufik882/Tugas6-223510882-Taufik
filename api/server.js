import jsonServer from 'json-server';
import cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(cors()); // Tambahkan ini untuk mengatasi masalah CORS
server.use(middlewares);
server.use(router);

export default server;
