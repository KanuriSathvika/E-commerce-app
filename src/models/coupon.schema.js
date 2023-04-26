import mongoose from "mongoose";

const couponSchema=new moongose.Schema({
   code:{
    type:String,
    required:[true,"Please provide a coupon code"]
   },
   discount:{
    type:Number,
    default:0
   },
   active:{
    type:Boolean,
    default:true
   }
},
{
    timestamps:true
})

export default moongose.model("Coupon",couponSchema)