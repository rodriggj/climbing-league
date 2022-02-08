const express = require('express')
const router = express.Router()

const Route = require('../models/Route')
const User = require('../models/User')

const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator/check')

//@desc     Get all Routes
//@route    GET /api/v1/routes
//@access   Private
router.get('/', auth, async (req, res) => {
    try{
        const routes = await Route.find( { user: req.user.id }).sort({timestamp: -1})
        res.status(200).json({
            success: true, 
            count: routes.length, 
            data: routes
        })
    } catch(err){
        res.status(500).json({
            success: false, 
            error: 'Server error', 
            msg: err.message
        })
    }
})

//@desc     Get a single route
//@route    GET /api/v1/routes/:id
//@access   Public
router.get('/:id', async (req, res) => {
    try{
        res.send('Get Route By Id')
    } catch(err){
        res.send(err)
    }
})

//@desc     Create a new Route
//@route    POST /api/v1/routes
//@access   Private
router.post('/', [auth, [
    check('week', 'Week is required.').not().isEmpty(),
    check('route_number', 'Route number for the specified week is required.').not().isEmpty()
]], async (req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({
            success: 'Failed', 
            msg: errors.array()
        })
    }

    try{
        let existingRoute = await Route.findOne({ week: req.body.week, route_number: req.body.route_number })

        if(existingRoute){
            return res.status(400).json({
                success: "Failed", 
                msg: "Route number for this week already exists."
            })
        }

        const { 
            route_rating, 
            week, 
            route_number, 
            setter
         } = req.body

         const user = req.user.id

         let newRoute = new Route( { 
            user,
            route_rating, 
            week, 
            route_number
         } )

         await newRoute.save()

         res.status(201).json({
             status: "Success", 
             msg: "New Route Created", 
             data: newRoute
         })
    } catch(err){
        res.status(400).json({ 
            status: "Failed", 
            msg: err.message
        })
    }
});

//@desc     Create a new Route
//@route    POST /api/v1/routes
//@access   Private
router.put('/:id', async (req, res) => {
    try{
        res.send('Updates a new Route')
    } catch(err){
        res.send(err)
    }
});

router.delete('/:id', async (req, res) => {
    try{
        res.send('Deletes a new Route')
    } catch(err){
        res.send(err)
    }
});

module.exports = router;