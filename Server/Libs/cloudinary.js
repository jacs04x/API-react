/* 
Importamos de cloudinary la propiedad v2 para acortar las llamadas de propiedades
*/
import {v2 as cloudinary} from 'cloudinary';

/* 

Importamos dontenv para hacer uso de variables de entorno.
y lo configuramos.
*/
import dotenv from 'dotenv';
dotenv.config();

/* 
Configuramos cloudinary con el nombre de cloud, el api key, y el api secret 
(estos datos los obtenemos al crear una cuenta en cloudinary)
*/

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

/* 
Exportamos una funcion que nos servira para subir imagenes a una carpeta en cloudinary,
se le pasara una ruta en donde esta contenida la imagen, en este caso, la imagen es temporal y 
esta dentro de la carpeta upload, y la carpeta en donde se guardara esta(s) imagen(es) es dentro de 'test'
cloudinary creara esta carpeta si es que no existe y aqui guardara las imagenes.
retorna una promesa por eso utilizamos async y await.
*/

export const uploadImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, 
        {
            folder: 'test'
        }
        )
}

/* 
Exportamos una funcion que nos servira para eliminar una imagen de cloudinary, recibira un id y con el metodo destry(id) 
se borrara la imagen de la carpeta 'test'
*/

export const deleteImage = async (id) => {
    console.log("imagen elimnada de cloudinary")
    return await cloudinary.uploader.destroy(id);
}