import { configureStore } from "@reduxjs/toolkit";
import leftnavReducer from "../slices/leftnavSlice"

const appStore = configureStore({
    reducer: {
        leftnav: leftnavReducer
    }
})

export default appStore