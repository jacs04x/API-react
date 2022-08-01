
import {usePost} from '../context/postContext.js'
import { Link } from 'react-router-dom'
import { PostCard } from '../components/PostCard.js'
//<Link to='/new' className='text-blue-100 block' >crear nuevo</Link>
//<button onClick={() => setPost([1,2,3])} className='bg-red-100'> asd</button>
//const {setPost} = usePost()
export const HomePage = () => {

  const {post} = usePost()

  if (post.length === 0)
    return (
      <div>
        <h1>No hay Publicaciones</h1>{" "}
      </div>
    );

  return (
    <div >
        <div className="flex items-center justify-center py-3">
          <Link to="/new"> <button className='px-5 py-2 rounded bg-teal-200 hover:bg-teal-500'> New </button> </Link>
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

