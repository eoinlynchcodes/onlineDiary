const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')
const cationHelpers = require('./cationHelpers');

router.get('/test', (req, res) => {
    res.status(200).json({message: 'In cationRoutes..'});
});

router.post('/register', (req, res) => {
    let { username, password } = req.body;
    
    const hashedPassword = bcryptjs.hashSync(password, 6);

    cationHelpers.add({
        username,
        password: hashedPassword
    })
    .then(newUser => {
        res.status(201).json(newUser);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});




module.exports = router;