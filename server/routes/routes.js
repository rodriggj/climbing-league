const express = require('express')
const router = express.Router()
const Route = require('../models/Route')

//@desc     Get all Routes
//@route    GET /api/v1/routes
//@access   Public
router.get('/', async (req, res) => {
    try{
        const routes = await Route.find()
        res.status(200).json({
            success: true, 
            count: routes.length, 
            data: routes
        })
    } catch(err){
        res.status(400).json({
            success: false, 
            data: "", 
            msg: err
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
router.post('/', async (req, res) => {
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
            route_point_value, 
            setter, 
            route_stars, 
            route_attempts, 
            route_flashed_qy, 
            route_2nd_attempt_qty, 
            route_3rd_attempt_qty,
            route_4th_attempt_qty,
            route_5th_attempt_qty
         } = req.body

         let newRoute = new Route( { 
            route_rating, 
            week, 
            route_number, 
            route_point_value, 
            setter, 
            route_stars, 
            route_attempts, 
            route_flashed_qy, 
            route_2nd_attempt_qty, 
            route_3rd_attempt_qty,
            route_4th_attempt_qty,
            route_5th_attempt_qty
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