const mongoose = require('mongoose');

// Define the `product` schema describing fields stored for each product
// This maps the JavaScript representation to MongoDB documents.
const productSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount: Number,
    isadmin: Boolean,
    bgcolor: String,
    panelcolor:String,
    textcolor:String
});



module.exports = mongoose.model('product', productSchema);