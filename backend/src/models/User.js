const mongoose = require('mongoose');
const CardSchema = new mongoose.Schema({
    email:String,
    senha: String,
    iduser:String
});

module.exports = mongoose.model('User',CardSchema);