const express = require('express');
const helmet = require('helmet');

const cors = require('cors');

const userRouter = require('./auth/auth-router')
const recipesRouter = require('./recipe/recipes-router')

const server = express();

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/users', userRouter)
server.use('/recipes', recipesRouter)

server.get('/', (req, res) => {
    res.status(200).json({mes: "HI, from the backend"});
});

module.exports = server;