import {createSlice} from '@reduxjs/toolkit'

//DO FOR A MINI CRUD OPERATION
let defaultState = {accountNumber : "", password: ""}
export const userSlice = createSlice({
    name : "user",
    initialState : {value : defaultState},
    reducers : {
        login :  (state, action)=>{
            state.value = action.payload
        },

        logout : (state, action)=>{
          state.value = {name : "", age:0, email : ""}
        }
    }
});


export const {login, logout} =  userSlice.actions
export default userSlice.reducer