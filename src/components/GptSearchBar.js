import React from 'react'
import langs from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    console.log(langs)
   const langKey = useSelector(store => store.config.lang);
   console.log(langKey);

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input
                    type='text'
                    className='p-4 m-4 col-span-9'
                    placeholder={langs[langKey].gptSearchPlaceholder} />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
                    {langs[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar