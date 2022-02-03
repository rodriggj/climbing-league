const express = require('express')
const router = express.Router()
const c_teams = require('../controllers/teams')

router.get('/', c_teams.getAllTeams)
router.get('/:id', c_teams.getTeamById)
router.post('/', c_teams.createTeam);
router.put('/:id', c_teams.updateTeam);
router.delete('/:id', c_teams.deleteTeam);

module.exports = router;