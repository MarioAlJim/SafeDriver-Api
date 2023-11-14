require('dotenv').config();

const ServerSafeDriver = require('./Server');

const server = new ServerSafeDriver();

server.start();
