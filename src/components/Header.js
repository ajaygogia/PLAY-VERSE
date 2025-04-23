import React, { useEffect, useState } from 'react'
import { MENU_LOGO, SIGN_IN_LOGO, YT_LOGO } from '../utilities/constants'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLeftnav } from '../slices/leftnavSlice'
import { signOut } from 'firebase/auth'
import { auth } from '../utilities/fireBase'

const Header = () => {
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const [youtubeSuggestions, setYoutubeSuggestions] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [suggestions, setSuggestions] = useState([])
    function toggleMenu() {
        dispatch(toggleLeftnav())
    }

    function logOut() {
        signOut(auth).then(() => {
        }).catch((error) => {
        });
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            youtubeSearch(youtubeSuggestions)
        }, 300)
        return () => {
            clearTimeout(timer)
        }
    }, [youtubeSuggestions])

    async function youtubeSearch(value) {
        const data = await fetch('http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=' + value)
        const json = await data.json()
        setSuggestions(json[1])
        console.log(suggestions)
    }
    return (
        <div className='grid grid-flow-col'>
            <div className='flex row col-span-1'>
                <img onClick={toggleMenu} className='m-4 ml-6 h-7 cursor-pointer' alt='menu' src={MENU_LOGO}></img>
                <img className='m-4 h-7' alt='youtube-logo' src={YT_LOGO}></img>
            </div>
            <div className='col-span-10 -mx-10 my-4 text-center'>
                <input onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} onChange={(e) => setYoutubeSuggestions(e.target.value)} className='border p-2 h-8 border-black w-1/2 rounded-l-full' type='text' placeholder='Search'></input>
                <button className='absolute border px-2 h-8 border-black rounded-r-full' type='button'>🔍</button>
                {showSuggestions && <div className='w-[40%] py-2px text-justify ml-[19%] absolute rounded-lg'>
                    <ul className='rounded-lg'>
                        {suggestions.map(s => <li key={s} className='px-2 py-1 bg-gray-50 hover:bg-gray-300'>🔍 {s}</li>)}
                    </ul>
                </div>}
            </div>
            {user && <div className='col-span-1 flex items-center'>
                <img className='m-4 ml-6 h-7' alt='sign-in' src={SIGN_IN_LOGO}></img>
                <span>{user?.email}</span>
                <span className='cursor-pointer ml-3' onClick={logOut}>⛔</span>
            </div>}
        </div>
    )
}

export default Header
