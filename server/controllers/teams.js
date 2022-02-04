const express = require('express')

//@desc     Get all Routes
//@route    GET /api/v1/routes
//@access   Public
exports.getAllTeams = async (req, res, next) => {
    try{
        res.send('Get all Teams')
    } catch(err){
        res.send(err)
    }
}

// This is an example
exports.getAllTeams = async (req, res, next) => {
    try{
        res.send('Get all Teams')
    } catch(err){
        res.send(err)
    }
}

exports.getTeamById = async (req, res, next) => {
    try{
        res.send('Get Team By Id')
    } catch(err){
        res.send(err)
    }
}

exports.createTeam = async (req, res, next) => {
    try{
        res.send('Creates a new Team')
    } catch(err){
        res.send(err)
    }
}

exports.updateTeam = async (req, res, next) => {
    try{
        res.send('Updates a new Team')
    } catch(err){
        res.send(err)
    }
}

exports.deleteTeam = async (req, res, next) => {
    try{
        res.send('Deletes a new Team')
    } catch(err){
        res.send(err)
    }
}