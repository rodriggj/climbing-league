const express = require('express')
const router = express.Router()
const c_auth = require('../controllers/auth')
const auth = require('../middleware/auth')

router.get('/', auth, c_auth.getAuthenticatedUser)
router.post('/', c_auth.loginAuthenticatedUser)

module.exports = router;