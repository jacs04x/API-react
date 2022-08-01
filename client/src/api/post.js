import axios from 'axios'

export const getPostRequest = async() => {
    return await axios.get('/posts')
}

export const createPostResquest = async (post) => {
    return await axios.post('/post', post)
}

export const deletePostRequest = async (id) => {
    return await axios.delete('/post/'+id)
}

export const getPostByIdRequest = async (id) => {
    return await axios.get('/post/'+id)
}