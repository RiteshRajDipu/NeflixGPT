import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-14 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl font-bold md:text-3xl'>{title}</h1>
        <p className='hidden md:inline-block w-1/4 text-md py-2'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='bg-white text-black p-2 px-6 text-sm rounded-md hover:bg-opacity-80'>
              ▶ Play
            </button>
            <button className='bg-gray-500 text-white p-2 px-6 mx-2 text-sm bg-opacity-80 rounded-md'>
                ℹ More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle