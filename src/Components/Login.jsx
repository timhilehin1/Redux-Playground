import {React, useState} from "react";
import {useDispatch} from 'react-redux'
import { login, logout } from "../Reducers/user";
import {lightMode, redMode} from "../Reducers/theme"
import { Link, useNavigate  } from "react-router-dom";


function Login(){

     const [formData, setFormData] = useState({
        accountNumber : '',
        password: ''
     })
    const dispatch = useDispatch()
    const navigate = useNavigate();


  function handleChange(event){
       const {name, value} = event.target

       setFormData((prevData)=>{
            return {
                ...prevData,
               [name] : value
            }
       })
    }


    function handleData(e){
         e.preventDefault()
         console.log(formData)
         navigate("/profile")
    }


    return (
        <div>
        <p>Login and be there</p>

    <form onSubmit={handleData}>
        <div className="flex">
        <label htmlFor="accountNumber">Account Number</label>
        <input type="text" name="accountNumber" onChange={handleChange}/>
        </div>

        <div  className="flex">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange}/>
        </div>

        <button type="submit" onClick={()=>{
            dispatch(login({accountNumber: formData.accountNumber, password: formData.password, }))
        }}>LOG IN</button>

</form>
        {/* <button type="submit" onClick={()=>{
            dispatch(logout())
        }}>Log Out</button>
        <button type="submit" onClick={()=>{
          dispatch(redMode('red'))
        }}>Change mode</button> */}
        </div>
    )
}

export default Login