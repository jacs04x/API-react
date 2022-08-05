/* 
Un Hook es una función de javascript que permite crear/acceder al estado y a los ciclos de vida de React y que, 
para asegurar la estabilidad de la aplicación.

allows to use all React features without writing class components.

Importamos desde react los hooks:
> useState: useState hook is a function which is used to store state value in a functional component. 
    It accepts an argument as the initial value of the state. It returns an array with 2 elements.
    First element is the current value of state. Second element is a function to update the state.
> createContext: 
> useContext: 
> useEffect: 
*/

import {useState, createContext, useContext, useEffect} from 'react';

import {getPostRequest, 
        createPostResquest, 
        deletePostRequest,
        getPostByIdRequest,
        updatePostRequest} from '../api/post.js'

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
