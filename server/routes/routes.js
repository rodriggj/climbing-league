const express = require('express')
const router = express.Router()
const c_routes = require('../controllers/routes')

router.get('/', c_routes.getAllRoutes)
router.get('/:id', c_routes.getRoutesById)
router.post('/', c_routes.createRoute);
router.put('/:id', c_routes.updateRoute);
router.delete('/:id', c_routes.deleteRoute);

module.exports = router;