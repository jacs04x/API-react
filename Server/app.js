import express from 'express';

/* 
importamos las rutas de los endpoints
*/
import postRoutes from '../Server/Routes/post.routes.js'

/* 
importamos fileUpload para poder subir imagenes al server
*/

import fileUpload from 'express-fileupload';
const app = express();

/* 
Middleware

El middleware es el software que brinda servicios y funciones comunes a las aplicaciones, 
además de lo que ofrece el sistema operativo. Generalmente, se encarga de la gestión de los datos, 
los servicios de aplicaciones, la mensajería, la autenticación y la gestión de las API.

En este caso se encarga de parsear a json.

*/
app.use(express.json())


/* 

Definimos el middleware para cargar imagenes al server siendo estos temporales y almacenados en la carpeta 'upload'

*/

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

/* 

Definimos los enpoints en donde express buscara matchs de estos, 

*/

app.use(postRoutes);

/* 
exportamos app para uso en otros modulos.
*/

export default app;