
const express=require('express');
const mongoose=require('mongoose');
const router=require('./routes/user-routes');
const app=express();
const cors=require('cors');
require('dotenv').config();
const cookieParser=require('cookie-parser');
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use('/api',router);


mongoose.connect(`mongodb+srv://sachinMudan:${process.env.MONGODB_PASSWORD}@cluster0.imeuuuw.mongodb.net/student_db?retryWrites=true&w=majority`)
.then(()=>{
    app.listen(5000);
    console.log("DataBase Connected");
})
.catch((err)=>console.log(err))

