const express = require('express')

//@desc     Get Authenticated User
//@route    GET /api/v1/auth
//@access   Private
exports.getAuthenticatedUser = async (req, res, next) => {
    try{
        res.send('Get Authenticated User')
    } catch(err){
        res.send(err)
    }
}

//@desc     Create Authentication Token
//@route    POST /api/v1/auth
//@access   Public
exports.authenticateUser = async (req, res, next) => {
    try{
        res.send('Authenticate User')
    } catch(err){
        res.send(err)
    }
}