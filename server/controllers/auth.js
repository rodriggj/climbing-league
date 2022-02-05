const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.authUser = async (req, res, next) => {
    res.send('Authenticate User Route')
}