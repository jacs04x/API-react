import Post from '../Models/Post.js'

export const getPost = async(req, res) => {
    const posts = await Post.find();    
    return res.send(posts);
}

export const getById = async(req, res) => {
    const post = await Post.findById(req.params.id)
    if (!post) {return res.send("no encontrado")}
    console.log(post);
    return res.send("encontrado")
}

export const createPost = async(req, res) => {
    const {title , description} = req.body
    const post = new Post({title, description})
    await post.save()
    return res.json(post)
}

export const updatePost = async(req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body , {new : true})
    console.log(post);
    return res.send("actualizado");
}

export const deletePost = async(req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    if(!post){
        return res.send("no encontrado")
    }
    console.log(post);
    return res.send("eliminado")
}