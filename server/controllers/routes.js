const express = require('express')

//@desc     Get all Routes
//@route    GET /api/v1/routes
//@access   Public
exports.getAllRoutes = async (req, res, next) => {
    try{
        res.send('Get all Routes')
    } catch(err){
        res.send(err)
    }
}

exports.getRoutesById = async (req, res, next) => {
    try{
        res.send('Get Route By Id')
    } catch(err){
        res.send(err)
    }
}

exports.createRoute = async (req, res, next) => {
    try{
        res.send('Creates a new Route')
    } catch(err){
        res.send(err)
    }
}

exports.updateRoute = async (req, res, next) => {
    try{
        res.send('Updates a new Route')
    } catch(err){
        res.send(err)
    }
}

exports.deleteRoute = async (req, res, next) => {
    try{
        res.send('Deletes a new Route')
    } catch(err){
        res.send(err)
    }
}
