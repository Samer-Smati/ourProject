const express = require('express');
const user = express.Router();
const {Register} = require('../controllers/user.controller')

user.post('/register',Register)


module.exports = user