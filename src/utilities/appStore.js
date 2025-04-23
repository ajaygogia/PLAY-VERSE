import { configureStore } from "@reduxjs/toolkit";
import leftnavReducer from "../slices/leftnavSlice"
import chatReducer from "../slices/chatSlice"
import userReducer from "../slices/userSlice"


const appStore = configureStore({
    reducer: {
        leftnav: leftnavReducer,
        chat: chatReducer,
        user: userReducer
    }
})

export default appStore