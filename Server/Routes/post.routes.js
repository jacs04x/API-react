import {Router} from "express";
import {getPost, getById, createPost, updatePost, deletePost} from '../Controllers/post.controller.js'
const router = Router()


router.get('/posts' , getPost )

router.get('/post/:id', getById)

router.post('/post' , createPost)

router.put('/post/:id', updatePost)

router.delete('/post/:id', deletePost
)


export default router;