import React from 'react'
import {toast} from 'react-hot-toast'
import {usePost} from '../context/postContext.js'
import {useNavigate} from 'react-router-dom'


export const PostCard = ({post}) => {

  const {deletePost} = usePost();
  const navigate = useNavigate()

  const hadleDelete = (_id) => {
    toast((t) => (
        <div className='px-7 py-3'>
            <p className='px-7 py-5'>¿Eliminar?</p>
            <div className='px-7 py-5'>
                <button className='mx-2' 
                onClick={() => {
                        deletePost(_id) 
                        toast.dismiss(t.id);
                    }
                } >
                    Si
                </button>
                <button className='bg-slate-400 hover: bg-slate-500 px-3 py-2 text-white rounded-sm mx-2'
                onClick={() => toast.dismiss(t.id)}
                >No</button>
            </div>
        </div>
    ) )
  }
  
  return (
    <div 
    className='bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover: cursor-pointer'
    onClick={() => navigate(`/edit/${post._id}`)}
    >
        {post.image && <img src={post.image.url} />}
        <div className="px-6 py-7" >
            
            <div className="flex justify-between py-2">
            <h3>{post.title}</h3>
            <button className="bg-red-600 text-sm px-2 py-1 rounded" 
                onClick={(e) =>  {
                    e.stopPropagation()
                    hadleDelete(post._id)
                    }
                } >Eliminar</button>
            </div>            
            <p>{post.description}</p>
            
        </div>
            
    </div>
  )
}
