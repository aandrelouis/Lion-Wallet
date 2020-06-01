const express=require("express");
const mongoose = require('mongoose');
const routes=require("./routes");
const cors =require('cors');
const app=express();

mongoose.connect('mongodb+srv://',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3333);