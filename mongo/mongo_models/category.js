const mongoose = require('mongoose');

const category_schema = new mongoose.Schema({
    
    name        : { type: String,  default: ""    },
    image       : { type: String,  default: ""    },
    is_delete   : { type: Boolean, default: false },
},
{ timestamps: true });

module.exports = mongoose.model('categories', category_schema);