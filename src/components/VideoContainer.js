import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utilities/constants'
import Thumbnail from './Thumbnail'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideos()
  }, [])
  async function getVideos() {
    const data = await fetch(YOUTUBE_API)
    const json = await data.json()
    setVideos(json.items)
  }
  if (!videos) return
  return (
    <div className='flex flex-row gap-6 flex-wrap gap-10'>
      {videos.map((video) => {
        return (
          <Link key={video.id} to={'watch?v=' + video?.id}>
          <Thumbnail info={video}></Thumbnail>
          </Link>
        )
      })}
    </div>
  )
}

export default VideoContainer
