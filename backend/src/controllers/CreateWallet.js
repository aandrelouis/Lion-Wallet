const Wallet = require('../models/Wallet');
const bitcoin = require('bitcoinjs-lib');

module.exports={
    async index(req,res){
        const { iduser } = req.params

        const brainsrc = `${iduser}`
        const hash = bitcoin.crypto.sha256(Buffer.from(brainsrc))
        const keyPair = bitcoin.ECPair.fromPrivateKey(hash)
        const addr = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey }).address
        const secret = keyPair.toWIF()

        return res.json({
          addr,
          secret
        });
    }
};

/*
module.exports = {
    async store(req,res) {
      

      const brainsrc = 'MinhaWalletAndrelouis'
      const hash = bitcoin.crypto.sha256(Buffer.from(brainsrc))
      const keyPair = bitcoin.ECPair.fromPrivateKey(hash)
      const addr = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey }).address
      const secret = keyPair.toWIF()
      
      console.log('The brain wallet of '+brainsrc+' \nAddress: '+addr,' Private key:'+secret)

      res.json({
        addr,
        secret,
      }
        );
    }
}
*/