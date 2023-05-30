import React from "react";
import {createSlice} from '@reduxjs/toolkit'


let defaultState = 'blue'

export const themeSlice = createSlice({

    name : 'theme',
    initialState : {value : defaultState},
    reducers : {
         
        lightMode : (state, action)=>{
            state.value  = defaultState
        },

        redMode : (state, action)=>{
            state.value = action.payload
        }
    }
})


export const {lightMode, redMode} = themeSlice.actions

export default themeSlice.reducer