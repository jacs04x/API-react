import React from 'react'
import {PostForm, HomePage, NotFound} from './pages'
import {PostProvider} from './context/postContext.js'
import {Routes, Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'


function App() {
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center'>
      <div className='px-10 m-auto container'>
      <PostProvider>
      <Routes>
        <Route path='/' element={<HomePage/>}/>    
        <Route path='/new' element={<PostForm/>}/>
        <Route path='/edit/:id' element={<PostForm/>}/>    
        <Route path='*' element={<NotFound/>}/>    
      </Routes>
      <Toaster 
      position="top-center"
      />
      </PostProvider>
    </div>
  </div>
  )
}


export default App