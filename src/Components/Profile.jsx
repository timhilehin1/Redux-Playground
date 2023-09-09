import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import  {addNumber, removeNumber, editNumber } from '../Reducers/array'



function Profile(){
     
    const array = useSelector((state)=> state.array.value)
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
    <button onClick={()=>{dispatch(addNumber({id : 1, name : "oladapo david", age: 19}))}} >Add to Array</button>
    <button onClick={()=>{dispatch(removeNumber({id : 1}))}} >Remove from Array</button>


    <h1>List of Students in array</h1>
    <div>
    {
        array && array.length > 0 ?
        array.map((item)=>{
            return (
            <div>
             <p>{item.id}</p>
             <p>{item.name}</p>
             <p>{item.age}</p>
             <button onClick={()=>{dispatch(editNumber({id: 1, name : "oladapo davidd",}))}}>edit</button>
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