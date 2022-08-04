/* 
importamos router de express para definir los endpoints
*/

import {Router} from "express";

/* 
importamos las peticiones http del controlador
*/
import {getPost, getById, createPost, updatePost, deletePost} from '../Controllers/post.controller.js'


const router = Router()

/* 
Con Router enlazamos el tipo de peticion con el endpoint. 
Definimos cada uno de los endpoints usando las funciones importadas del controlador.


1. Métodos HTTP:
Se Usan para hacer consultas a una API

    * GET: Obtener datos
    * POST : Guardar Datos
    * PUT : Actualizar completamente la instancia.
    * DELETE : Eliminar una instancia.
*/

router.get('/posts' , getPost )

router.get('/post/:id', getById)

router.post('/post' , createPost)

router.put('/post/:id', updatePost)

router.delete('/post/:id', deletePost)


/* 



*/

export default router;