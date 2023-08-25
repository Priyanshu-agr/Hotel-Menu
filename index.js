const express=require('express');
const app=express();
const userRoutes=require('./routes/user');
const hotelRoutes=require('./routes/hotel');
const mongoose=require('mongoose');
const db=mongoose.connection;
mongoose.connect('mongodb://127.0.0.1:27017/refratherm');

db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => {
    console.log("Database connected");
});

app.use(express.urlencoded({ extended: true }));
app.use('/user',userRoutes);
app.use('/hotel',hotelRoutes);

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})