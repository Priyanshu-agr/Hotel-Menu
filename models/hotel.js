const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const hotelSchema=new Schema({
    name:String,
    menu:[{
        foodItem:String,
        price:Number
    }]
});

module.exports=mongoose.model('Hotel',hotelSchema);