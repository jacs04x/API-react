
//import { Link } from 'react-router-dom'
import {usePost} from '../context/postContext.js'

//<Link to='/new' className='text-blue-100 block' >crear nuevo</Link>
//<button onClick={() => setPost([1,2,3])} className='bg-red-100'> asd</button>
//const {setPost} = usePost()
export const HomePage = () => {

  const {post} = usePost()

  if(post.length === 0 ) return (
    <div><h1>No hay Publicaciones</h1> </div>  
  )

  return (
    <div className="text-white">
      {
      post.map(p => (
        <div key={p._id} > 
          titulo: {p.title} <br></br>
          desc: {p.description}
        </div>
      ))
      }
      </div>
  )
}

