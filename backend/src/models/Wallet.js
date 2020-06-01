const mongoose = require('mongoose');
const WalletSchema = new mongoose.Schema({
    iduser:String,
    wallet:String,
    exchange:String,
});

module.exports = mongoose.model('Wallet',WalletSchema);