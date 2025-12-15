const mongoose = require('mongoose');
const ownerSchema = new mongoose.Schema({
    fullname: {
        Type: String,
        minLength: 3,
        Trim: true
    },
    email: String,
    password: String,
    products: {
        type: Array,
        default: []
    },
    picture:String,
    gstin:String
});



module.exports = mongoose.model('Owner', ownerSchema);