import React from "react"
import { SIGN_IN_LOGO } from "../utilities/constants"

const commentsData = [
    {
        name: 'John Doe',
        text: "This video is amazing! Thanks for sharing.",
        reply: [{
            name: 'Jane Smith',
            text: "I completely agree, it's very informative.",
            reply: [{
                name: 'Alice Johnson',
                text: "Yes, the editing is top-notch too!",
                reply: []
            }, {
                name: 'Diana Evans',
                text: "Looking forward to more videos like this.",
                reply: []
            }]
        }]
    },
    {
        name: 'Emily White',
        text: "This tutorial is very helpful, thanks!",
        reply: [{
            name: 'Frank Green',
            text: "Glad you found it helpful! I did too.",
            reply: [{
                name: 'Grace Hall',
                text: "The step-by-step explanation was great.",
                reply: []
            }, {
                name: 'Henry King',
                text: "I appreciate the effort put into this video.",
                reply: []
            }, {
                name: 'Ivy Lee',
                text: "The examples used were very clear.",
                reply: []
            }, {
                name: 'Jack Moore',
                text: "I hope they make more tutorials like this.",
                reply: []
            }]
        }]
    },
    {
        name: 'Karen Scott',
        text: "The visuals in this video are stunning!",
        reply: []
    },
    {
        name: 'Mia Walker',
        text: "This is exactly what I was looking for, thank you!",
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