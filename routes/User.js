const express = require('express');
const user = express.Router();
const Controllers = require("../controllers/UserController")


user.get('/', Controllers.getUser)
user.get('/add', Controllers.addUser)




module.exports = user;