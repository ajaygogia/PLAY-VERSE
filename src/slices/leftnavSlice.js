import { createSlice } from "@reduxjs/toolkit";

const leftnavSlice = createSlice({
    name: 'leftnav',
    initialState: {
        isLeftnavOpen: false
    },
    reducers: {
        toggleLeftnav: (state) => {
            state.isLeftnavOpen = !state.isLeftnavOpen
        }
    }
})

export const {toggleLeftnav} = leftnavSlice.actions
export default leftnavSlice.reducer