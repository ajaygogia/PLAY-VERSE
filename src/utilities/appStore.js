import { configureStore } from "@reduxjs/toolkit";
import leftnavReducer from "../slices/leftnavSlice"
import chatReducer from "../slices/chatSlice"


const appStore = configureStore({
    reducer: {
        leftnav: leftnavReducer,
        chat: chatReducer
    }
})

export default appStore