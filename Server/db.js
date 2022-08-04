import mongoose from "mongoose";
import {MONGODB} from './config.js'


/* 
importamos mongoose y la url de conexion de config.js 
ahora exportamos una funcion para realizar la conexion a mongodb atlas, este proceso es asincrono por lo que 
se utiliza la palabra reservada 'async' y await dentro de la funcion ya que esto regresara una promesa

*/

export async function connectDB() {
    try{
    const db = await mongoose.connect(MONGODB)
    console.log("connected")
    }catch(error){
        console.log(error);
    }

}