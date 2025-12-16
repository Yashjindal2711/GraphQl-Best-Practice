const mongoose = require('mongoose');

function connectDB(db_url) {

    mongoose.connect(db_url)
    .then(() => { console.log("MongoDB connected successfully."); })
    .catch((err) => { console.error("MongoDB connection error:", err); });
}

module.exports = { connectDB };