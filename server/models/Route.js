const mongoose = require('mongoose')

const RouteSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users'
    },
    route_name: {
        type: String
    },
    route_rating: {
        type: String,
        enum : ['-','5.6','5.7','5.8','5.9-','5.9','5.9+','5.10-','5.10','5.10+','5.11-','5.11','5.11+','5.12-','5.12','5.12+','5.13-','5.13','5.13+'],
        required: true,
        default: '-'
    }, 
    week: {
        type: String,
        enum : ['-','Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
        required: true,
        default: '-'
    }, 
    route_number: {
        type: String,
        enum : ['-','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'],
        required: true,
        default: '-'
    },
    setter: {
        type: String,
    }
}, {timestamps: true})

const Route = mongoose.model('Route', RouteSchema)

module.exports = Route