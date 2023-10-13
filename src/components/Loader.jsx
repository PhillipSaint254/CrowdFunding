import React from 'react'

// import { loader } from '../assets';

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-[100vw]">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16 w-16"></div>
    </div>
  )
}

export default Loader