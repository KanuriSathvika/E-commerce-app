import mongoose from "mongoose";
import AuthRoles from "../utils/authRoles";
import bcrypt from "bcryptjs"

const userSchema=new  mongoose.Schema(
    {
      name:{
        type:String,
        required:["true","Name is required"],
        maxLength:[
            50,
            "Name must be less than 50 chars"
        ]
      },
      email:{
        type:String,
        required:["true","Email is required"],
      },
      password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[8,"password must be atleast 8 chars"],
        select:false
      },
      role:{
        type:String,
        enum: Obect.values(AuthRoles),
        default:AuthRoles.USER
      },
      forgotPasswordToken:String,
      forgotPasswordExpiry:Date
    },
    {timestamps:true}
)

// ENcrypt the password before saving:Hooks 
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()
    this.password= await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods={
  // compare password
  comparePassword:async function(enteredPasword){
    return await bcrypt.compare(enteredPasword, this.password)
  }

}


export default mongoose.model("User",userSchema)