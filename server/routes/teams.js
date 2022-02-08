const express = require('express')
const router = express.Router()
const Team = require('../models/Team')

//@desc     Get all Teams
//@route    GET /api/v1/teams
//@access   Public
router.get('/', async (req, res) => {
    res.send('List of all Teams')
})

//@desc     Get a Single Team
//@route    GET /api/v1/teams/:id
//@access   Public
router.get('/:id', async (req, res) => {
    res.send('A single Team')
})

router.post('/', async (req, res) => {
    res.send('Creates a new Team.')
})

router.put('/:id', async (req, res) => {
    res.send('Updates a Team.')
})

router.delete('/:id', async (req, res) => {
    res.send('Deletes a Team.')
});

module.exports = router;