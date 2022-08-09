
import {usePost} from '../context/postContext.js'
import { Link } from 'react-router-dom'
import { PostCard } from '../components/PostCard.js'

export const HomePage = () => {

  const {post} = usePost()

  if (post.length === 0)
    return (
      <div>
        <h1 className="flex items-center justify-center text-white">No hay Publicaciones</h1>
        <div className="flex items-center justify-center py-3">
          <Link to="/new"> <button className='px-5 py-2 rounded bg-teal-500 hover:bg-teal-300'> Nuevo </button> </Link>
        </div>
      </div>
    );

  return (
    <div >
        <div className="flex items-center justify-between  py-3">
          <p className='text-white'>Posts: {post.length}</p>
          <Link to="/new"> <button className='px-5 py-2 rounded bg-teal-500 hover:bg-teal-900 text-white'> Nuevo </button> </Link>
        </div>
        <div className="grid grid-cols-4 gap-4" >
          {
            post.map(p => (
              <div key={p._id} > 
                <PostCard post={p} key={p._id}/>
              </div>
            ))
          }
        </div>
      </div>
  )
}

