const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    // Get token from the Header
    const token = req.header('x-auth-token')

    // Check if not token 
    if(!token) {
        return res.status(401).json({
            status: "failure", 
            msg: 'No token, authorization denied.'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.user
        next()
    } catch (error) {
        res.status(401).json({
            status: 'Failed', 
            msg: 'Token is not valid.'
        })
    }
}