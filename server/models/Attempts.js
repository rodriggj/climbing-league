const mongoose = require('mongoose')

const AttemptSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users'
    }, 
    route: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'routes'
    },
    completed: {
        type: Boolean,
        required: true
    }, 
    attempt: {
        type: String, 
        enum: ['No Attempts.', 'Flash', '2nd-Attempt', '3rd-Attempt', '4th-Attempt', '5th-Attempt'],
        default: 'No Attempts.',
        required: true
    }
}, {timestamps: true})

const Attempt = mongoose.model('Attempt', AttemptSchema)

module.exports = Attempt