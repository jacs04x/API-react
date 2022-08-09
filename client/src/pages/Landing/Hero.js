import React from 'react'

import { CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon } from '@heroicons/react/solid'
import bgImg from './assets/cyber-bg.png'

const style = {
    boton: 'text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md px-2 py-2 '
}

export const Hero = () => {
    return (
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>
                        Unique Secuency & Production
                    </p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>
                        Cloud Management
                    </h1>
                    <p className='text-2xl'>
                        This is our Tech brand.
                    </p>
                    <button className={style.boton + 'py-3 px-6 sm:w-[60%] my-4'}>Get Started</button>
                </div>
                <div>
                    <img className='w-full' src={bgImg} alt="/" />
                </div>
            </div>
        </div>
    )
}
