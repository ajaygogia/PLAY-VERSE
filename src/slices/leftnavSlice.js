import { createSlice } from "@reduxjs/toolkit";

const leftnavSlice = createSlice({
    name: 'leftnav',
    initialState: {
        isLeftnavOpen: true
    },
    reducers: {
        toggleLeftnav: (state) => {
            state.isLeftnavOpen = !state.isLeftnavOpen
        },
        closeLeftNav: (state)=>{
            state.isLeftnavOpen = false
        }
    }
})

export const {toggleLeftnav, closeLeftNav} = leftnavSlice.actions
export default leftnavSlice.reducer