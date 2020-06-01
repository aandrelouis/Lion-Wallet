const Wallet = require('../models/Wallet');

module.exports={
    async store(req, res){
    const {wallet,iduser,exchange} = req.body;
    
    const  carteira = await Wallet.create({wallet,iduser,exchange});

        
    return res.json(carteira);
    },

    async index(req,res){

        const wallet = await Wallet.find();

        return res.json(wallet);
    }

};