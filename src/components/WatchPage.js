import React from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeLeftNav } from '../slices/leftnavSlice'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
    const [searchParams] = useSearchParams()
    const videoId = searchParams.get('v')
    const dispatch = useDispatch()
    dispatch(closeLeftNav())
    return (
        <div className='w-full'>
            <div className='flex mt-6 w-full'>
                <div>
                    <iframe className='ml-32 rounded-lg'
                        width="1200"
                        height="600"
                        src={'https://www.youtube.com/embed/' + videoId}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>
                <div className='border h-[600px] border-black w-full bg-gray-100 mx-2 overflow-y-scroll flex flex-col-reverse'>
                    <LiveChat />
                </div>
            </div>

            <div className='ml-32'>
                <CommentsContainer />
            </div>
        </div>
    )
}

export default WatchPage
