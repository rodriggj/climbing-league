const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Auth route')
}); 

router.post('/', (req, res) => {
    res.send('Created Authentication Token')
}); 


module.exports = router;