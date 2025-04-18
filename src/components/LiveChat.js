import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../slices/chatSlice'
import { getRandomMessages, getRandomNames } from '../utilities/helpers'

const LiveChat = () => {
    const dispatch = useDispatch()
    const message = useSelector((store) => store.chat.messages)
    const [liveMessage, setLiveMessage] = useState('')

    function addToLiveChat() {
        dispatch(addMessage({
            name: 'User',
            message: liveMessage
        }))
        setLiveMessage('')
    }

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(addMessage({
                name: getRandomNames(),
                message: getRandomMessages()
            }))
            console.log(message)
        }, 2000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className='flex flex-col-reverse'>
            <form className='w-full' onSubmit={(e)=>{e.preventDefault()}}>
            <input value={liveMessage} type='text' className='h-10 m-2 w-[80%] p-4' onChange={(e)=>{
                setLiveMessage(e.target.value)
            }} placeholder='type your text'></input>
            <button onClick={addToLiveChat} className='cursor-pointer h-10 border w-20 border-black rounded-sm bg-slate-400'>Add</button>
            </form>
            {message.map((message, i) => <ChatMessage key={i} name={message?.name} message={message?.message} />)}
        </div>
    )
}

export default LiveChat
