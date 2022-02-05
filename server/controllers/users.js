const User = require('../models/User')
const bcrypt = require('bcryptjs')

//@desc     Get all Users
//@route    GET /api/v1/users
//@access   Public
exports.getAllUsers = async (req, res, next) => {
    try{
        const users = await User.find()
        res.status(200).json({
            success: true, 
            count: users.length, 
            data: users
        })
    } catch(err){
        res.status(400).json({
            success: false, 
            data: "", 
            msg: err
        })
    }
}

//@desc     Get a Single User
//@route    GET /api/v1/users/:id
//@access   Public
exports.getUserById = async (req, res, next) => {
    try{
        res.send("Retrieve a single user")
    } catch (err){
        res.send(err)
    }
}

// @desc      Create a User
// @route     POST /api/v1/users
// @access    Public
exports.createUser = async (req, res, next) => {
    let isExistingEmail = req.body.email

    try {
        let existingUser = await User.findOne({ email: isExistingEmail })

        // Check if existing user
        if(existingUser){
            return res.status(400).json({
                success: false, 
                msg: 'User with Email already exists.'
            })
        } 

        // Create a new user
        const { firstName, lastName, username, password, email, phone, setter, admin, climber, climber_category, photo } = req.body
        let newUser = new User( { firstName, lastName, username, password, email, phone, setter, admin, climber, climber_category, photo } )

        // Encrypt the password
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds)
        newUser.password = await bcrypt.hashSync(password, salt)

        // Create the new user with encrypted password
        await newUser.save()

        // Send a response that new User is created
        res.status(201).json({
            success: true, 
            msg: 'New user created.', 
            data: newUser
        })
    } catch (error) {
        res.status(500).json({
            success: false, 
            data: error.name + error.message
        })
    }
}

exports.updateUser= async (req, res, next) => {
    try{
        res.send('Updates a new User')
    } catch(err){
        res.send(err)
    }
}

exports.deleteUser = async (req, res, next) => {
    try{
        res.send('Deletes a new User')
    } catch(err){
        res.send(err)
    }
}