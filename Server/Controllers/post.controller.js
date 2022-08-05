
/* 
importamos el schema de los datos para el modelo
*/
import Post from '../Models/Post.js'
/* 
importamos dos funciones para el manejo de las imagenes en el host de cloudinary. 
*/
import {uploadImage, deleteImage} from '../Libs/cloudinary.js'
/* 
importamos fs-extra para manipular los archivos en el proyecto (eliminacion de documentos, carpetas)
*/
import fs from 'fs-extra'

/* 
Exportamos funciones que realizan operaciones con el schema de mongodb. 
*/

/* 
Obtenemos todos los datos del schema con una peticion de busqueda ( con el metodo find() ) 
lo cual regresara una promesa por lo que estaremos a la espera de esta (con await y async)
y si la consulta fue correcta se regresan los datos, en caso contrario o en caso de error se cacha,
se imprime el error en consola y regresa un estado 500 por error en el servidor.
*/

export const getPost = async(req, res) => {
    try {
        const posts = await Post.find();    
        return res.send(posts);
    } catch (error) {
        console.error(error.message);
        return res.sendStatus(500).json({message: error.message});
    }
}

/* 
Obtenemos los datos por id (con la funcion findById() ) dentro de la base de datos, sera necesario 
utilizar los parametros de la peticion y obtner el valor de id de estos.

Si no se encuentra el dato solicitado se envia un status 404, si lo encuentra regresa este dato, y en caso de error
en la consulta, cacha el error y regresa un status 500.

*/

export const getById = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post) {return res.sendStatus(404);}
        return res.send(post);
    } catch (error) {
        return res.sendStatus(500).json({message: error.message});
    }
}

/* 
    Creamos un nuevo elemento del Schema desestructurando el cuerpo de la peticion 
    y en caso de contar con la propiedad req.file.image este nuevo elemento a crear contendra una imagen, la cual 
    sera temporal, estara ubicada en la carpeta 'upload' y se creara un objeto 'image' con las propiedades url y
    public_id, se borrara la imagen de la carpeta upload y se creara un nuevo elemento del Schema y guardamos,  
    en caso contrario pasamos los valores que fueron obtenidos por la desestructuracion del cuerpo, y creamos 
    un nuevo elemento del Schema y guardamos, en ambos casos regresamos el nuevo elemento agregado y en caso de error
    se envia un status 500.

*/

export const createPost = async(req, res) => {
    try {
        const {title , description} = req.body
        let image;
        if(req.files?.image){
            const result = await uploadImage( req.files.image.tempFilePath)
            image = {
                url: result.secure_url,
                public_id : result.public_id
            }
            await fs.remove(req.files.image.tempFilePath)
        }
        const newPost = new Post({title, description, image})
        await newPost.save()
        return res.send(newPost);
    } catch (error) {
        return res.sendStatus(500).json({message: error.message});
    }
}


/* 
Actualizamos un elemento del schema, obtenemos el valor del id con el uso de los parametros de la peticion,
y obtenemos el cuerpo de la peticion y llamamos al metodo findByIdAndUpdate() a este le agregamos como tercer parametro 
un objeto indicando que al actualizar regrese el elemento del schema actualizado y no los valores anteriores a la 
actualizacion, finalmente retornamos este elemento actualizado, si hay un error manda un status 500
 */

export const updatePost = async(req, res) => {  
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body , {new : true})
        return res.send(post);
    } catch (error) {
        return res.sendStatus(500).json({message: error.message});
    }
}


/* 
Eliminamos un elemento del schema, obtenemos el valor del id con el uso de los parametros de la peticion
llamamos al metodo findByIdAndDelete() y le pasamos este id si obtenemos respuesta con el elemento eliminado y si 
este contiene la propiedad image y este a su vez constiene la propiedad public_id eliminamos la imagen de cloudinary pasandole 
estas propiedades, 
en caso de no obtener esta respuesta regresamos status 404 ya que no fue encontrado y no fue eliminado.


*/


export const deletePost = async(req, res) => {
try {
    const post = await Post.findByIdAndDelete(req.params.id);
    
    if(!post){return res.sendStatus(404);}
    if(post.image?.public_id){ await deleteImage(post.image.public_id) }

    return res.sendStatus(204);
} catch (error) {
    return res.sendStatus(500).json({message: error.message});
}
}