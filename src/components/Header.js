import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { addToogleGptSearch } from '../utils/gptSlice';
import lang from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.toggleGptSearch) 

  const handleSignout = () => {
    signOut(auth).then(() => { })
      .catch((error) => {
        navigate('/error');
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(addToogleGptSearch())
  }

  const languageHandler = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={LOGO} alt='logo' />
      {user && (
        <div className='flex p-2'>
          {showGptSearch && (
            <select onChange={languageHandler} className='p-2 m-2 bg-gray-900 text-white'>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          )}
          <button onClick={handleGptSearch} className='py-2 px-3 mx-4 my-2 bg-purple-800 text-white rounded-lg'>
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className='w-12 h-12'
            alt='usericon'
            src={user?.photoURL}
          />
          <button onClick={handleSignout} className='font-bold text-white'>(Sign Out)</button>
        </div>
      )}
    </div>
  )
}

export default Header