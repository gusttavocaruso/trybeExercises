import { io } from 'socket.io-client';

const client = io('http://localhost:3001')

export default client;