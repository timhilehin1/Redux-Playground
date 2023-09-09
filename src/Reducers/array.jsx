import React from 'react'
import {createSlice} from '@reduxjs/toolkit'

let defaultArray = []


export const arraySlice = createSlice({
    name: "array",
    initialState : {
        value : defaultArray
    },
    reducers : {
        addNumber(state, action){
             state.value.push(action.payload)
        },
        removeNumber : (state, action)=>{
         state.value = state.value.filter((item)=>{
             return item.id !==  action.payload.id
         })
        },
        editNumber : (state, action)=>{
            state.value =  state.value.filter((item)=>{
                 if(item.id === action.payload.id){
                     return {
                           ...item, 
                     }
                 }
            })
        }
    }
});

export const {addNumber, removeNumber, editNumber} = arraySlice.actions
export default arraySlice.reducer