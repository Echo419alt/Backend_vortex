const mongoose = require("mongoose")

const empleadoModel = new mongoose.Schema(
    {
     
        name:{type: String },
        position:{type: String},
        office:{type: String},
        salary:{type: Number},
   },
   {
        timestamps:true,
        versionKey:false,

   }
)
   //Modelo de datos del usuario
const ModelEmpleado = mongoose.model("empleados", empleadoModel);
module.exports = ModelEmpleado; 