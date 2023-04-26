// signup a new user

import asyncHandler from "../service/asyncHandler";
import CustomError from "../utils/CustomError";

export const signUp =asyncHandler(async(req,res)=>{
    // get data from user
    const {name, email, password}=req.body

    // validation
    if(!name || !email || !password){
        throw new CustomError("Please add all fields",400)
    }
})
