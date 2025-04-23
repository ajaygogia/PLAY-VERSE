import React, { useEffect } from "react"
import Sidebar from "./Sidebar"
import { Outlet, useNavigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../slices/userSlice";
import { auth } from "../utilities/fireBase";
import { useDispatch, useSelector } from "react-redux";

const Body = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }))
                navigate('/')
            } else {
                dispatch(removeUser())
                navigate('/login')
            }
        });
        return () => unsubscribe()
    }, [])

    return (
        <div className="flex flex-row">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Body