
const asyncHandler =(fn)=> async (req,res,next)=>{
    try{
       await setRandomFallback(req,res,next)
    }catch(error){
        res.status(error.code || 500).json({
            success:false,
            message:error.message
        })

    }
}

export default asyncHandler;

// const asyncHandler="sathvika";
// const asyncHandler=()=>{}
// const asyncHandler=(func)=>{}
// const asyncHandler = (func) =>()=>{}
// const asyncHandler = (func) =>async()=>{}