const User = require('../models/User');

module.exports={
    async store(req, res){
    const {email,senha} = req.body;
    
    const user = await User.findOne({email});

    if(user && user.senha==senha){
        return res.json(user);
    }

    return res.status(404).json({ error: "not found" });
}

};