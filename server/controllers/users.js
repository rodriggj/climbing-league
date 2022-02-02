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
        if(!user) {
            res.status(400).json({
                success: false,
                message: `User with Id ${req.params.id} not found.`,
            })
        } else {
            res.status(200).json({
                success: true, 
                data: user, 
                msg: `User with id ${req.params.id} was found.`
            })
        }
    } catch (err){
        res.status(500).json({
            success: false, 
            data: err, 
            msg: 'The id parameter is mal-formed'
        })
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

// router.put('/:id', c_users.updateUser);
// router.delete('/:id', c_users.deleteUser);