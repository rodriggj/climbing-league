const express = require('express')
const router = express.Router()
const c_auth = require('../controllers/auth')

router.get('/', c_auth.getAuthenticatedUser); 
router.post('/', c_auth.authenticateUser);

module.exports = router;