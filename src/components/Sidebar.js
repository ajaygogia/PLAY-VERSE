import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const showNav = useSelector(store => store.leftnav.isLeftnavOpen)
    return !showNav ? null : (
        <div className='w-52 ml-6'>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li>Shorts</li>
                <li>Subscription</li>
            </ul>
            <h1 className='font-bold mt-4 text-lg'>Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Gaming</li>
            </ul>
            <h1 className='font-bold mt-4 text-lg'>More</h1>
            <ul>
                <li>Setting</li>
                <li>Help</li>
                <li>Feedback</li>
                <li>History</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Sidebar
