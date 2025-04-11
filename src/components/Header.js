import React from 'react'
import { MENU_LOGO, SIGN_IN_LOGO, YT_LOGO } from '../utilities/constants'
import { useDispatch } from 'react-redux'
import { toggleLeftnav } from '../slices/leftnavSlice'

const Header = () => {
    const dispatch = useDispatch()
    function toggleMenu() {
        dispatch(toggleLeftnav())
    }
    return (
        <div className='grid grid-flow-col'>
            <div className='flex row col-span-1'>
                <img onClick={toggleMenu} className='m-4 ml-6 h-7 cursor-pointer' alt='menu' src={MENU_LOGO}></img>
                <img className='m-4 h-7' alt='youtube-logo' src={YT_LOGO}></img>
            </div>
            <div className='col-span-10 -mx-10 my-4 text-center'>
                <input className='border p-2 h-8 border-black w-1/2 rounded-l-full' type='text' placeholder='Search'></input>
                <button className='absolute border px-2 h-8 border-black rounded-r-full' type='button'>🔍</button>
            </div>
            <div className='col-span-1'>
                <img className='m-4 ml-6 h-7' alt='sign-in' src={SIGN_IN_LOGO}></img>
            </div>
        </div>
    )
}

export default Header
