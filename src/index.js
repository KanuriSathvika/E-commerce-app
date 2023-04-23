import mongoose from "mongoose";
import app from "./app.js";
import config from "./config/index.js";

// create a method
// run this method
// to connect with databse
( async ()=>{
    try{
      await  mongoose.connect(config.MONGODB_URL)
      console.log("DB CONNECTED !");

      app.on('error',(err)=>{
        console.error("ERROR: ",err);
        throw err
      })
     
      const onListening=()=>{
        console.log(`Listening on port ${config.PORT}`);
      }

      app.listen(config.PORT, onListening)
    
    }
    catch(err){
        console.error("ERROR: ",err)
        throw err
    }
})()