import React from "react";
import {useSelector} from 'react-redux'



function Profile(){

    const user = useSelector((state)=> state.user.value)
    // const theme = useSelector((state)=> state.theme.value)
    console.log(user)
    // console.log(theme)
    return (
    <div >
    View my profile
    {/* <p >Name: {user.name}</p>
    <p>Age:{user.age}</p>
    <p>Email:{user.email}</p> */}

    <p>Hi, {user.accountNumber}</p>
    <p>Edit your password, {user.password} </p>
    </div>
    )
}


export default Profile