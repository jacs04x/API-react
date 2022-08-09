import React, { useState } from 'react'

import { MenuIcon, XIcon } from '@heroicons/react/outline'

const style = {
    contenedor: 'w-screen h-[80px] bg-zinc-200 fixed drop-shadlow-lg',
    contenedor2: 'px-2 flex justify-between items-center w-full h-full',
    menu: 'w-5',
    signIn: 'text-black border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md bg-transparent mr-4 px-2 py-2',
    signUp: 'text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md px-2 py-2'
}

export const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className={style.contenedor}>
            <div className={style.contenedor2}>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>Abut</li>
                        <li>Support</li>
                        <li>Platforms</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className={style.signIn}> Sign In</button>
                    <button className={style.signUp}> Sign Up</button>

                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className={style.menu} /> : <XIcon className="w-5" />}
                </div>

            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>Abut</li>
                <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
                <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
                <div className='flex flex-col'>
                    <button className={style.signIn + 'bg-transparent px-8 py-3 mb-4'}> Sign In</button>
                    <button className={style.signUp}> Sign Up</button>
                </div>
            </ul>

        </div>
    )
}

