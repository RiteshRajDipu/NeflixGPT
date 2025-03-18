import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleTheValue = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_medium.jpg"
                    alt='back-ground-logo' />
            </div>
            <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80~'>
                <h1 className='font-bold text-3xl py-4'>
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
               {!isSignInForm && (
                <input 
                type='text'
                placeholder='Full Name'
                className='p-2 my-3 w-full bg-gray-700'
                />
               )}
                <input
                    type='text'
                    placeholder='Email Address'
                    className='p-2 my-3 w-full bg-gray-700' />
                <input 
                    type='password'
                    placeholder='password'
                    className='p-2 my-3 w-full bg-gray-700' />
                <button
                    className='p-2 my-4 bg-red-700 w-full rounded-lg'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p 
                  onClick={toggleTheValue}
                 className='py-4 cursor-pointer'>
                 {isSignInForm ? "New to netflix? Sign up now" : "Registered? Sign In Now"}
                </p>
            </form>
        </div>
    )
}

export default Login