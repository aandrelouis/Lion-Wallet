const User = require('../models/User');
const crypto = require('crypto');



module.exports={
    async store(req, res) {
        const { email,senha } = req.body;
        var iduser = crypto.randomBytes(12).toString('hex');

       const user = await User.create({ email,senha,iduser});
        return res.json(user);
    },

    async index(req,res){

        const user = await User.find();

        return res.json(user);
    }

};