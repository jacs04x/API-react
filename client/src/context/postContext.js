
import {useState, createContext, useContext, useEffect} from 'react';

import {getPostRequest, 
        createPostResquest, 
        deletePostRequest,
        getPostByIdRequest,
        updatePostRequest} from '../api/post.js'

/* 
Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React
 */
const postContext = createContext()

export const usePost = () => {
    const context = useContext(postContext)
    return context
} 

export const PostProvider = ({children}) => {
    
    const [post, setPost] = useState([])
    
    const getPosts = async() => {
        const res = await getPostRequest()
        setPost(res.data)
    }

    const createPost = async (nuevo) => {
        try {
            const res = await createPostResquest(nuevo)
            if(res){
            setPost([...post,res.data])
            return 1;
            } 
            return 0            
        } catch (error) {
            console.error(error)
        }

    }

    const deletePost = async (id) => {
        const res= await deletePostRequest(id)
        if(res.status === 204){
            setPost(post.filter((p) => p._id !== id))
        }
    }

    const getPostById = async (id) => {
        const res= await getPostByIdRequest(id);
        return res.data

    }

    const updatePost = async (id, nuevo) => {   
        const res= await updatePostRequest(id, nuevo);
        setPost(post.map((p) => (p._id === id ? res.data : p)))
        
    }

    useEffect(()=> {
        getPosts()
    }, [])

    return (
        <postContext.Provider value={{
            post,
            getPosts,
            createPost,
            deletePost,
            getPostById,
            updatePost
            
        }}>
            {children}
        </postContext.Provider>
    )
}
