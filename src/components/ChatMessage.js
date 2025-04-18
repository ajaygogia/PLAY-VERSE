import React from 'react'
import { SIGN_IN_LOGO } from '../utilities/constants'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center'>
            <img className='m-2 h-7' alt='sign-in' src={SIGN_IN_LOGO}></img>
            <div>
                <span className='font-bold mx-2'>{name}</span>
                <span>{message}</span>
            </div>
        </div>
    )
}

export default ChatMessage
