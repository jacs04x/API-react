import {useState, createContext, useContext, useEffect} from 'react';
import {getPostRequest, createPostResquest, 
    deletePostRequest, getPostByIdRequest, updatePostRequest} from '../api/post.js'

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
        const res = await createPostResquest(nuevo)
        if(res){
        setPost([...post,res.data])
        return 1;
        } 
        return 0
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

    const updatePost = async (nuevo) => {
        //const res= await updatePostRequest(nuevo);
        console.log({update: nuevo})
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
