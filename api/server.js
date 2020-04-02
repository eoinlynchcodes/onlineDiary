const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('../authentication/cationRoutes');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.user('/api/auth', authRoutes);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Yeh'});
});

module.exports = server;