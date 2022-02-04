const express = require('express')
const router = express.Router()
const c_users = require('../controllers/users')



router.get('/', c_users.getAllUsers); 
router.get('/:id', c_users.getUserById)
router.post('/', c_users.createUser);

// router.put('/:id', c_users.updateUser);
// router.delete('/:id', c_users.deleteUser);

module.exports = router;