import React from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeLeftNav } from '../slices/leftnavSlice'

const WatchPage = () => {
    const [searchParams] = useSearchParams()
    const videoId = searchParams.get('v')
    const dispatch = useDispatch()
    dispatch(closeLeftNav())
    return (
        <div>
            <iframe className='ml-32 mt-6 rounded-lg'
                width="1200"
                height="600"
                src={'https://www.youtube.com/embed/' + videoId}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
        </div>
    )
}

export default WatchPage
