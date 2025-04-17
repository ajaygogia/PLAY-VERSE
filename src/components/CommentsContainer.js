import React from "react"
import { SIGN_IN_LOGO } from "../utilities/constants"

const commentsData = [
    {
        name: 'Ajay Gogia',
        text: "This is one of the best video i ever watched",
        reply: [{
            name: 'Ajay Gogia',
            text: "This is one of the best video i ever watched",
            reply: [{
                name: 'Ajay Gogia',
                text: "This is one of the best video i ever watched",
                reply: []
            }, {
                name: 'Ajay Gogia',
                text: "This is one of the best video i ever watched",
                reply: []
            }, {
                name: 'Ajay Gogia',
                text: "This is one of the best video i ever watched",
                reply: []
            }, {
                name: 'Ajay Gogia',
                text: "This is one of the best video i ever watched",
                reply: []
            }]
        }]
    },
    {
        name: 'Ajay Gogia',
        text: "This is one of the best video i ever watched",
        reply: [{
            name: 'Ajay Gogia',
            text: "This is one of the best video i ever watched",
            reply: [{
                name: 'Ajay Gogia',
                text: "This is one of the best video i ever watched",
                reply: []
            }, {
                name: 'Ajay Gogia',
                text: "This is one of the best video i ever watched",
                reply: []
            }, {
                name: 'Ajay Gogia',
                text: "This is one of the best video i ever watched",
                reply: []
            }, {
                name: 'Ajay Gogia',
                text: "This is one of the best video i ever watched",
                reply: []
            }]
        }]
    },
    {
        name: 'Ajay Gogia',
        text: "This is one of the best video i ever watched",
        reply: []
    },
    {
        name: 'Ajay Gogia',
        text: "This is one of the best video i ever watched",
        reply: []
    },
    {
        name: 'Ajay Gogia',
        text: "This is one of the best video i ever watched",
        reply: []
    }
]

const Comment = ({ comment }) => {
    const { name, text } = comment
    return (
        <div className="flex gap-3 mt-4 bg-gray-100">
            <img className="w-12" alt="user" src={SIGN_IN_LOGO}></img>
            <div>
                <h1 className="font-bold text-lg">{name}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentList = ({ data }) => {
    return (
        <div>
            {data.map((comment, index) => {
                return (
                    <div key={index}>
                        <Comment comment={comment} />
                        <div className="ml-8">
                            <CommentList data={comment.reply} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const CommentsContainer = () => {
    return (
        <div>
            <h1 className="font-bold text-2xl mt-3">Comments:</h1>
            <CommentList data={commentsData} />
        </div>
    )
}

export default CommentsContainer