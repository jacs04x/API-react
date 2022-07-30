import React from 'react'
import {PostForm, HomePage, NotFound} from './pages'
import {PostProvider} from './context/postContext.js'
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className='bg-neutral-900 min-h-screen flex items-center overflow-y: hidden;'>
      <div className='px-10 bg-red-700 m-auto container'>
      <PostProvider>
      <Routes>
        <Route path='/' element={<HomePage/>}/>    
        <Route path='/new' element={<PostForm/>}/>    
        <Route path='*' element={<NotFound/>}/>    
      </Routes>
      </PostProvider>
    </div>
  </div>
  )
}


export default App