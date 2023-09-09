import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import  {addNumber, removeNumber, editNumber } from '../Reducers/array'
import { generateId } from "../utils";



function Profile(){
     
    const array = useSelector((state)=> state.listOfUsers.value)
    const user = useSelector((state)=> state.user.value)
    const dispatch = useDispatch()




    console.log(array)
    // const theme = useSelector((state)=> state.theme.value)
    // console.log(user)
    // console.log(theme)
    return (
    <div >
    View my profile
    {/* <p >Name: {user.name}</p>
    <p>Age:{user.age}</p>
    <p>Email:{user.email}</p> */}

    <p>Hi, {user.accountNumber}</p>
    <p>Edit your password, {user.password} </p>

    <h1> Array </h1>
    <button onClick={()=>{dispatch(addNumber({id : generateId(), name : "oladapo david", age: 19}))}} >Add to Array</button>
  


    <h1>List of Students in array</h1>
    <div>
    {
        array?.length > 0 ?
        array.map((item)=>{
            return (
            <div key={item.id}>
             <p>{item.id}</p>
             <p>{item.name}</p>
             <p>{item.age}</p>
             <button onClick={()=>{dispatch(editNumber({id: 1, name : "oladapo davidd",}))}}>edit</button>
             <button onClick={()=>{dispatch(removeNumber({id : item.id}))}} >Remove from Array</button>
             </div>
            )
        })
        :
        <p> No User for Now</p>
    }
    </div>
    </div>
    )
}


export default Profile