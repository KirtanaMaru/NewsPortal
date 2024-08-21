import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'

const Login = () => {
  let [data,setData] =  useState({"_id":"","pwd":""})
  let [status ,setStatus]=useState("")
  let func=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const navigate = useNavigate();
  let obj =useContext(Ct)
  let login = ()=>{
    axios.post("http://localhost:5000/login",data).then((res)=>{
      
      if(res.data.token!=undefined){
        console.log("yes")
        obj.setLogin(res.data)
        navigate("/home")
      }else{
        setStatus(res.data.msg)
      }
    })
  }
  return (
    <div className="login">
          <h2>Login</h2>
          <div className='card'>
           <div style={{color:"red",fontSize:"21px"}}>{status}</div>
            <input type="text" placeholder="Email" name="_id" onChange={func} value={data._id}></input>
            <input type="Password" placeholder="Password" name="pwd" onChange={func} value={data.pwd}></input>
            <button onClick={login}>Login</button>
            <p>Create an Account ?<Link to="/reg">Click here</Link></p>
            
          </div>
        
    </div>
  )
}

export default Login