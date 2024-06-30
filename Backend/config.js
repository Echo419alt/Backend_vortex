const mongoose = require("mongoose");
require('dotenv').config()

//Funcion donde conectamos la base de datos
const dbconnect = ()=>{
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Conexion exitosa"))
    .catch((err)=> console.log(err.message));
}

module.exports = dbconnect;