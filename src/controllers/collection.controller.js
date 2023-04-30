import Collection from ".../models/collection.schema.js"
import asyncHandler from "../service/asyncHandler";
import CustomError from "../utils/CustomError";

export const createCollection= asyncHandler(async (req,res)=>{
    const {name}=req.body

    if(!name){
        throw new CustomError("Collection name is required",401)
    }

    const collection =await Collection.create({
        name
    })

    res.status(200).json({
        success:true,
        message:"Collection was created successfullly",
        collection
    })
})

export const UpdateCollection= asyncHandler(async (req,res)=>{
    const {name}=req.body
    const {id:collectionId}=req.params 
    
    if(!UpdateCollection){
        throw new CustomError("Collection not found",401)
    }
    
    let updatedCollection=await Collection.findByIdAndUpdate(collectionId,{
        name
    },{
        new:true,
        runValidators:true
    })

    const collection =await Collection.create({
        name
    })

    res.status(200).json({
        success:true,
        message:"Collection was created successfullly",
        collection
    })
})

export const deleteCollection= asyncHandler(async (req,res)=>{
   
    const {id:collectionId}=req.params 
    
    const collectionToDelete=Collection.findById(collectionId)

    if(!collectionToDelete){
        throw new CustomError("Collection to be deleted not found",401)
    }
    
    await collectionToDelete.remove()

    res.status(200).json({
        success:true,
        message:"Collection deleted successfullly",
    })
})

export const getAllCollection= asyncHandler(async (req,res)=>{
    
    const collections=Collection.find()

    if(!collections){
        throw new CustomError("No Collection found",401)
    }
    res.status(200).json({
        success:true,
        message:"Collection deleted successfullly",
    })
})