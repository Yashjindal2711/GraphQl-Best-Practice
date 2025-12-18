const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const product_schema = new mongoose.Schema({
    
    categoryId : { type: ObjectId, default: null, ref: "categories" },
    name        : { type: String,   default: "" },
    price       : { type: Number,   default: "" },
    color       : { type: String,   default: "" },
    imgPath     : { type: String,   default: "" },
},
{ timestamps: true });

let product = mongoose.model('products', product_schema);
module.exports = product;