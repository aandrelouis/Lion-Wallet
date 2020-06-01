const express = require('express');

const Wallet = require('./controllers/Wallet');
const User = require('./controllers/User');
const Session = require('./controllers/Session');
const FindWallet = require('./controllers/FindWallet');
const CreateWallet = require('./controllers/CreateWallet');

const routes = express.Router();

routes.post('/wallet',Wallet.store);
routes.get('/wallet',Wallet.index);

routes.post('/login',Session.store);

routes.post('/user',User.store);
routes.get('/user',User.index);

routes.get('/find/:iduser',FindWallet.index);

routes.delete('/findwallet/:wallet',FindWallet.destroy);


routes.get('/createwallet/:iduser',CreateWallet.index);

module.exports=routes;