const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: [true, 'You must enter a first name.'],
        trim: true,
        maxLength: [20, 'First Name cannot exceed 20 characters.']
    }, 
    lastName: {
        type: String, 
        required: [true, 'You must enter a Last name.'],
        trim: true,
        maxLength: [30, 'First Name cannot exceed 50 characters.']
    }, 
    username: {
        type: String, 
        lowercase: true, 
        required: [true, "can't be blank"], 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        index: true}
    , 
    password: {
        type: String, 
        required: [true, 'Password cannot be blank.']
    },
    email: {
        type: String, 
        lowercase: true, 
        unique: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
        index: true}
    ,
    phone: {
        type: String, 
        maxlength: [20, 'Phone number can be no longer than 20 characters.']
    }, 
    setter: {
        type: Boolean,
        required: true,
        default: false
    }, 
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    climber: {
        type: Boolean,
        required: true,
        default: true
    },
    climber_category: {
        type: String,
        enum : ['Rookie','Pusher','Crusher'],
        default: 'Pusher'
    }, 
    photo: {
        data: Buffer,
        contentType: String
    }
}, {timestamps: true})

const User = mongoose.model('User', UserSchema)

module.exports = User