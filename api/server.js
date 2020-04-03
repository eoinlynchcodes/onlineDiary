const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoutes = require('../authentication/cationRoutes');
const entryRoutes = require('../entries/entryRoutes');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/authentication', authRoutes);
server.use('/api/entries', entryRoutes);

server.get('/', (req, res) => {
    res.send('Yeh');
});

module.exports = server;