const User = require('../models/User')

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
    try{
        const user = await User.create(req.body)
        res.status(201).json({
            success: true, 
            data: user
        })
    } catch (err) {
        res.status(404).json({
            success: false, 
            data: err
        })
    }
};

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