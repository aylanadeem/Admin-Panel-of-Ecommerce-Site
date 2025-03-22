import React from 'react'
import { Loader } from 'react-feather';


export default function Screen1() {
  return (
<div  className="bg-gradient-to-b from-white  to-[#FFC97E] h-screen flex flex-col justify-center items-center ">
<img  className='h-56 ' src="public/pics/logo.svg" alt="Logo" />
<Loader className="animate-spin h-10 mt-24  text-white" size={48} />

    </div>
  )
}
