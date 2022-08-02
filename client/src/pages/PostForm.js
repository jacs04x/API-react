//import {usePost} from '../context/postContext.js'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {usePost} from '../context/postContext.js'
import { useNavigate, useParams, Link} from 'react-router-dom'
import * as Yup from 'yup'
import {toast} from 'react-hot-toast'
import {useEffect, useState} from 'react';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

export const PostForm = () => {
  const {createPost, getPostById, updatePost} = usePost()
  const navigate = useNavigate()
  const params = useParams();
  const [post, setPost] = useState({
    title:'',
    description:'',
    image : null
  })

  useEffect(() => {

  (async() => {
    if(params.id) {
      const res =  await getPostById(params.id)
      setPost(res)
    }
  })();
  }, [params.id])

  return (
    <div className='flex items-center justify-center'>
      <div className='bg-zinc-800 p-10 shadow-sm shadow-black'> 
        <div className='flex items-center justify-between' >
          <h1 className='text-white text-xl'>Post</h1>
            <Link to='/' className="text-white text-sm"> Regresar</Link>
        </div>
        <Formik
        initialValues={
          post
        }
        validationSchema={
          Yup.object({
            title : Yup.string().required("Titulo requerido"),
            description: Yup.string().required("Descripción requerida"),
            

          })
        }
      
        onSubmit={ async(values, actions) => {
            
            if(params.id){
              await updatePost(params.id,values)
              toast.success("Editado!")
              navigate('/')
            }else{

              const res = await createPost(values)
              if(res){
                toast.success("Agregado!")
                navigate('/')
              }
               
              
            }
            actions.setSubmitting(false)
          
        }}

        enableReinitialize
        >
          {({handleSubmit ,setFieldValue, isSubmitting}) => (

            <Form onSubmit={handleSubmit}>
              <label htmlFor='title' className='text-sm block text-white font-bold py-2'>Titulo</label>
            <Field 
              className="px-1 py-2 focus:outline-none rounded w-full"
              name='title'
              placeholder="Titulo"
            />

            <ErrorMessage component="p" name='title' className='text-red-400 text-sm'/>

            <label htmlFor='description' className='text-sm block text-white font-bold py-2'> Descripción</label>
            <Field 
              component='textarea'
              className="px-3 py-2 w-full"
              name='description' 
              placeholder="Descripción"
              rows={3}
              />
            <ErrorMessage component="p" name='description' className='text-red-400 text-sm'/>

            <label htmlFor='image' className='text-sm block text-white font-bold py-2'>Imagen</label>

            <input type='file' name='file' className='block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100'
            onChange={(e) => setFieldValue('image',e.target.files[0])}
            />

            <div className="flex items-center justify-center py-2">
            <button type='submit' className='text-white block bg-indigo-800 hover:bg-indigo-700 
            rounded mt-2 px-4 py-2 focus: outline-none disabled: bg-indigo-600' 
            disabled={isSubmitting}>{isSubmitting ? (<AiOutlineLoading3Quarters className='animate-spin h-5 w-5'/>): 'Guardar'}</button>
            </div>
          </Form>
          )}
        </Formik>

      </div>
      
    </div>
  )
}


