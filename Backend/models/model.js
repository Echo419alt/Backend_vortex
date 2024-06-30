const mongoose = require("mongoose")

//esquema del usuario
const userModel = new mongoose.Schema(
    {
     
        nombre_usuario:{
          type: String 
        },
        Pasword:{
          type: String
        },
        pais:{
          type: String
        },
        email:{
          type: String
        } 
   },
   {
        timestamps:true,
        versionKey:false,

   }
)
   //Modelo de datos del usuario
const ModelUser = mongoose.model("usuarios", userModel);
module.exports = ModelUser; 