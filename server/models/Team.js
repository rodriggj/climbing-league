const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    teamName: {
        type: String, 
        required: [true, 'You must enter a Team name.'],
        trim: true,
        maxLength: [30, 'First Name cannot exceed 30 characters.']
    }, 
    teamMembers: {
        type: Array, 
        required: true
    }, 
    teamScore: {
        type: Number
    }
}, {timestamps: true})

const Team = mongoose.model('Team', TeamSchema)

module.exports = Team