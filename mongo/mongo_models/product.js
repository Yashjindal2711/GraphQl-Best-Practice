const mongoose = require('mongoose');

const product_schema = new mongoose.Schema({
    
    category    : { type: String, default: "" },
    productName : { type: String, default: "" },
    price       : { type: Number, default: "" },
    color       : { type: String, default: "" },
    imgPath     : { type: String, default: "" },
},
{ timestamps: true });

let product = mongoose.model('productlists', product_schema);
module.exports = product;