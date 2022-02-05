const express = require('express')
const router = express.Router()
const c_auth = require('../controllers/auth')

router.get('/', c_auth.authUser)

module.exports = router;