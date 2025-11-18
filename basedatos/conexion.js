const mongoose = require('mongoose');


const conexion =  async()=>{

    try{
       await mongoose.connect("mongodb+srv://luisgascahernandez_db_user:8E3EHhHeCEraKASN@cluster0.zfpxm9s.mongodb.net/?appName=Cluster0")

       console.log("Conectado a la base de datos mi blog!!");
    }catch(error)
    {
        console.log(error);
        throw new Error("No se puede conectar a la  base de datos")

    }

}

module.exports = {
    conexion
}