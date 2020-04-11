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

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    cationHelpers.findBy({ username })
    .first()
    .then(user => {
        if( user && bcryptjs.compareSync(password, user.password)){
            // making a token..
            // 1 - Setting the payload
            const payload = {
                sub: user.id,
                username: user.username,
                roles: ['seller'],
            }
            // 2 - Decide config (like exp data)
            const options = {
                expiresIn: 60,
            }
            // 3 - Build & Sign the token.
            const token = jwt.sign(
                payload,
                process.env.JWT_SECRET || 'secret',
                options,
            )

            res.json({
                message: 'Token is included in this response.',
                token
            })
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});


// function generateToken(user){
//     const payload = {
//         subject: user.id,
//         username: user.username,
//     };
//     const options = {
//         expiresIn: '1d',
//     };

//     return jwt.sign(payload, secrets.JWT_SECRET, options);

// }


// Logout functionality needs to go here...


module.exports = router;