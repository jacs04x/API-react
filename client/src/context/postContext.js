import {useState, createContext, useContext} from 'react';
import {getPostRequest} from '../api/post'
import { useEffect } from 'react'

const postContext = createContext()

export const usePost = () => {
    const context = useContext(postContext)
    return context
} 

export const PostProvider = ({children}) => {
    
    const [post, setPost] = useState([])
    
    const getPosts = async() => {
        const res = await getPostRequest()
        console.log(res.data);
        setPost(res.data)
    }

    useEffect(()=> {
        getPosts()
      }, [])

    return (
        <postContext.Provider value={{
            post,
            getPosts
            
        }}>
            {children}
        </postContext.Provider>
    )
}
