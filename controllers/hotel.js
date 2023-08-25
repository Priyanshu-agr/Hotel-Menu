const Hotel=require('../models/hotel');

async function hotelMenu(req,res){
    try{
        const {hotel}=req.query;
        const {menu}=await Hotel.findOne({name:hotel});
        
        res.send(menu);
        console.log('Menu fetched successfully');
    }
    catch(e){
        console.log(e.message);
    }
}

module.exports={hotelMenu};