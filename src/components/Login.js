import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constant';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message);
        if (message) return

        if (!isSignInForm) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: USER_AVATAR,
                    })
                    .then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(
                            addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL
                        })
                        );
                    }).catch((error) => {
                        setErrorMessage(error);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        };
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    };
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={BG_URL}
                    alt='back-ground-logo' />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80~'>
                <h1 className='font-bold text-3xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                        ref={name}
                        type='text'
                        placeholder='Full Name'
                        className='p-2 my-3 w-full bg-gray-700'
                    />
                )}
                <input
                    ref={email}
                    type='text'
                    placeholder='Email Address'
                    className='p-2 my-3 w-full bg-gray-700' />
                <input
                    ref={password}
                    type='password'
                    placeholder='password'
                    className='p-2 my-3 w-full bg-gray-700' />
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button
                    onClick={handleButtonClick}
                    className='p-2 my-4 bg-red-700 w-full rounded-lg'
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p
                    onClick={toggleSignInForm}
                    className='py-4 cursor-pointer'>
                    {isSignInForm ? "New to netflix? Sign up now" : "Registered? Sign In Now"}
                </p>
            </form>
        </div>
    )
}

export default Login