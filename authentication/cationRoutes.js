const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
// const cationHelpers = require('./cationHelpers');

router.get('/', (req, res) => {
    res.status(200).json({message: 'In cationRoutes..'});
});

module.exports = router;