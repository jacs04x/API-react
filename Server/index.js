
/* 
Al importar el archivo app.js accedemos a configuraciones de express para definir lo que express necesitará
*/

import app from './app.js'
import {connectDB} from './db.js'
import {PORT} from './config.js'

/* 
Conectamos a la base de datos importandola (indica que fue exportada una funcion para crear la 
    conexion a MONGODB)
*/

connectDB();

/* 
Hacemos que express comienze a escuchar en el puerto declarado como constante en config.js 
*/

app.listen(PORT, () => {
    console.log("Escuchando...")
})