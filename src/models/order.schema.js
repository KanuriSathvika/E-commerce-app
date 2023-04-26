import mongoose from "mongoose";
const orderSchema = new moongose.Schema({
    product:{
        type:[
            {
                productId:{
                    type : moongose.Schema.Types.ObjectId,
                    ref:"Product"
                },
                count:Number,
                price:Number
            }
        ]
    },
    user:{
        type:moongose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:NUber,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    coupon:String,
    transactionId:String,
    status:{
        type:String,
        enum:["ORDERED","SHIPPED","DELIVERED","CANCELLED"],
        default:"ORDERED"
    }
},
{
    timestamps:true
})

export default moongose.model("Order",orderSchema)