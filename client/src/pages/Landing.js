import React from 'react'
import { NavBar } from './Landing/NavBar'
import { Hero } from './Landing/Hero'
export const Landing = () => {

  const style = {
    contenedor: 'text-center'
  }


  return (
    <div >
      <NavBar />
      <Hero />
    </div>
  )
}
