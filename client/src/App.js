import React from 'react'
/* 
Importamos los modulos definidos para cada ruta
*/
import {PostForm, HomePage, NotFound} from './pages'
/* 
Importamos el modulo que nos da acceso al contexto.
*/
import {PostProvider} from './context/postContext.js'
/* 
Importamos Routes para definir con Route las rutas de navegacion.
*/
import {Routes, Route} from 'react-router-dom'

import {Toaster} from 'react-hot-toast'


function App() {
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center'>
      <div className='px-10 m-auto container'>
      {
        /* 
        Al importar PostProvider damos acceso a todos los componentes para que puedan acceder al contexto.
        */
      }
      <PostProvider>
        {
          /* 
          Definimos las rutas validas de navegacion y se asocian con su componente correspondiante
          */
        }
      <Routes>
        <Route path='/' element={<HomePage/>}/>    
        <Route path='/new' element={<PostForm/>}/>
        <Route path='/edit/:id' element={<PostForm/>}/>    
        <Route path='*' element={<NotFound/>}/>    
      </Routes>
      {
        /* 
        Agregamos Toaster para dar informacion al usuario, este aparecera en la parte superior central
        */
      }
      <Toaster 
      position="top-center"
      />
      </PostProvider>
    </div>
  </div>
  )
}

/* 
Se exporta App para uso dentro de otros componentes.
*/

export default App