const Wallet = require('../models/Wallet');

module.exports={
    async index(req,res){
        const { iduser } = req.params

        const wallet = await Wallet.find({iduser:iduser});

        return res.json(wallet);
    },

    async destroy(req,res){
        const { wallet } = req.params
    
        const wallets = await Wallet.find({wallet:wallet});

        if(wallets){
            for(let i in wallets){
                await wallets[i].remove();
            }
        }
        
        return res.json('wallet destruida');
    }
};