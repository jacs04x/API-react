import dotenv from 'dotenv';

/* 
dontenv permite que podamos usar variables de entorno.
se configura para poder acceder a estos.
*/

dotenv.config();

/* 
MONGODB la url de conexion a mongodb atlas
*/

export const MONGODB= process.env.PASSWORD

/* 
El puerto en donde express estara escuchando
*/

export const PORT = process.env.PORT || 4000;