import React from "react"
const Thumbnail = ({ info }) => {
    if (!info) return
    const { snippet, statistics } = info
    return (
        <div className="mt-4 w-80">
            <img className="w-80 rounded-xl" alt="thumbnail" src={snippet?.thumbnails?.medium?.url}></img>
            <ul>
                <li className="font-bold text-lg">{snippet?.title}</li>
                <li>{snippet?.channelTitle + ' ✔️'}</li>
                <li>{statistics?.viewCount + ' views'}</li>
            </ul>
        </div>
    )
}

export default Thumbnail