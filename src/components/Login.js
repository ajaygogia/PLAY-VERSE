import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { validators } from '../utilities/validators';
import { auth } from '../utilities/fireBase';
import { useDispatch } from 'react-redux';
import { addUser } from '../slices/userSlice';

const Login = () => {
    let [signIn, setSignIn] = useState(true);
    let [errorMessage, setErrorMessage] = useState(null)
    const dispatch = useDispatch()
    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null)
    function toggleSignIn() {
        setSignIn(!signIn)
        setErrorMessage(null)
        if (name.current) name.current.value = null;
        if (email.current) email.current.value = null;
        if (password.current) password.current.value = null;
    }

    function signInClicked() {
        const message = validators(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message) return
        if (signIn) {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    console.log(userCredential)
                })
                .catch((error) => {
                    setErrorMessage('Invalid Credentials')
                });
        } else {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser
                        dispatch(addUser({ uid, email, displayName }))
                    })
                })
                .catch((error) => {
                    setErrorMessage('Email Already In Use')
                });
        }
    }

    return (
        <div>
            <div className='absolute'>
            </div>
            <form className='absolute mx-auto left-0 right-0 bg-black w-3/12 flex-col text-center h-auto rounded-xl mt-44 bg-opacity-80'>
                <h1 className='text-white text-3xl align text-left ml-8 py-2'>{signIn ? 'Sign In' : 'Sign Up'}</h1>
                {!signIn && <input ref={name} type='text' className='m-2 p-3 w-9/12 bg-black border border-white text-white rounded-sm' placeholder='Full Name'></input>}
                <input ref={email} type='text' className='m-2 p-3 w-9/12 bg-black border border-white text-white rounded-sm' placeholder='Email'></input>
                <input ref={password} type='password' className='m-2 p-3 w-9/12 bg-black border border-white text-white rounded-sm' placeholder='Password'></input>
                <p className='text-red-600 font-bold my-4 mx-auto w-9/12 text-left'>{errorMessage}</p>
                <button type='button' className='m-2 p-2 w-9/12 text-center rounded-lg bg-red-600 text-white' onClick={signInClicked}>{signIn ? 'Sign In' : 'Sign Up'}</button>
                {signIn && <p className='text-white'>Or</p>}
                <p className='text-white block m-4'>{signIn ? 'New User?' : 'Already a User?'} <a className='underline cursor-pointer' onClick={toggleSignIn}>{signIn ? 'Sign-up' : 'Sign-in'}</a> Now!</p>
            </form>
        </div>
    )
}

export default Login
