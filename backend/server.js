const express = require('express');
const cors = require('cors');
const connectDb = require('./config/conectDb');
const userRouter = require('./routes/user.routes')
const app = express();
require('dotenv').config()
app.use(express.json());
app.use(cors());
connectDb()
app.use('/',userRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err)=>{
    if(err) throw console.error(err);
    console.log(`listening on ${PORT}`)
})