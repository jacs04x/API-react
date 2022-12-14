import axios from 'axios'

export const getPostRequest = async() => {
    return await axios.get('/posts')
}

export const createPostResquest = async (post) => {
    const form = new FormData()
    //se convierte el json a form 
    for(let key in post){
        form.append(key, post[key])
    }
    return await axios.post('/post', form, {
        headers: {
            "Content-Type" : "multipart/form-data"
        }
    });
}

export const deletePostRequest = async (id) => {
    return await axios.delete('/post/'+id)
}

export const getPostByIdRequest = async (id) => {
    return await axios.get('/post/'+id)
}

export const updatePostRequest = async (id, post) => {
    return await axios.put('/post/'+id, post)
}