const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../users/users-model.js');
const secrets = require('../../config/secrets.js');


router.post('/register', (req, res) => {
let user = req.body;
const hash = bcrypt.hashSync(user.password, 10); 
user.password = hash;

db.add(user)
    .then(user => {
    //const token = generateToken(user); 
    res.status(201).json({message: `${user.username} was created`});
    })
    .catch(error => {
    res.status(500).json({message: `Unable to create user. ${error}`});
    });
});

router.post('/login', (req, res) => {
let { username, password } = req.body;

db.findBy({ username })
    .first()
    .then(user => {        
    if (user && bcrypt.compareSync(password, user.password)) {

        const token = generateToken(user); 
        res.status(200).json({message: `${user.username} has logged in`, token});
    } else {
        res.status(401).json({ message: 'Invalid Credentials' });
    }
    })
    .catch(error => {
    res.status(500).json(error);
    });
});
router.get('/status', (req, res) => {
    const currentTime = new Date().toLocaleString();
    res.status(200).json({message: `Server is active`, status:200, currentTime })
})    

function generateToken(user) {
const payload = {
    subject: user.id, 
    username: user.username
};

const options = {
    expiresIn: '7d'
};

return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;