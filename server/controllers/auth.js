const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// @route   GET api/v1/auth
// @desc    Get logged in user 
// @access  Private
exports.getAuthenticatedUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.status(200).json({
            status: 'Success', 
            msg: 'You were able to get the authenticated user.', 
            data: user
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: 'Failed', 
            msg: 'Unable to return authenticated user.'
        })
    }
}

// @route   POST api/v1/auth
// @desc    Auth user & get token
// @access  Public
exports.loginAuthenticatedUser = async (req, res, next) => {
    const { email, password } = req.body
    
    try {
        let user = await User.findOne({ email: email })

        if(!user) {
            return res.status(404).json({
                status: 'failure', 
                msg: 'No user with this email exists.' 
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({
                status: 'failure', 
                msg: 'The User password entered is incorrect.'
            })
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
            if(err) throw err
            res.json( {token: token } )
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).json({
            status: 'failure', 
            msg: err.message
        })
    }
}