import React from 'react'

export default function Screen2() {
  return (
    <div className="bg-gradient-to-b from-white to-[#FFC97E] h-screen flex flex-col justify-center items-center">
      <div className="relative">
        <img
          className="w-52 object-cover"
          src="public/pics/img1.svg"
          alt="Logo"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
          }}
        />

        <div className="absolute bottom-0 left-0 w-full text-center text-white font-bold text-lg">
          <img src="public/pics/text.svg" alt="Text" /> 
        </div>
      </div>
    </div>
  )
}
