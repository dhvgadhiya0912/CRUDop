const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        Type: String,
        minLength: 3,
        Trim: true
    },
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isadmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture:String,
});



module.exports = mongoose.model('User', userSchema);