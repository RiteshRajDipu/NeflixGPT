
import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img className='h-screen object-cover' src={BG_URL} alt='back-ground-logo' />
      </div>
      <div className='pt-[30%] md:p-0'>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>

  )
}

export default GptSearch