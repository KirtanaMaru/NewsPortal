import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useContext ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'

const Register = () => {
  let [data,setData] = useState({"name":"","_id":"","pwd":"","dob":"","phno":"","st":"","gen":""})
  let [status,setStatus] = useState("")
  let func=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let navigate =useNavigate()
  let obj=useContext(Ct)
  

  let add=()=>{
  
    axios.post("http://localhost:5000/reg",data).then((res)=>{
        setStatus(res.data.msg)
        if(res.data.msg==="Registration successfully"){
            setData({"name":"","_id":"","pwd":"","dob":"","phno":"","st":"","gen":""})
            navigate("/")
        }
    })
   
  }

  return (
    <div className="reg">
      <h2 style={{padding:"10px"}}>Register</h2>
      <div className='card'>
           <div style={{color:"red",fontSize:"21px"}}>{status}</div>
           <input type="text" value={data.name} name="name" placeholder="Username" onChange={func}></input>
           <input type="text" value={data._id} name="_id" placeholder="Email" onChange={func}></input>
           <input type="Password" value={data.pwd} name="pwd" placeholder="Password" onChange={func}></input>
           <input type="text" value={data.phno} name="phno" placeholder="Phno" onChange={func}></input>
           <input type="date" value={data.dob} name="dob" onChange={func}></input>
            <div>Gender: <input type="radio" value="male" onChange={func} checked={data.gen=="male"} name="gen"></input>Male
                  &nbsp;<input type="radio" value="female"  onChange={func} checked={data.gen=="female"} name="gen"></input>Female
            </div>
            <div>State:<select name="st" value={data.st} onChange={func}>
              <option value="" selected disabled>select state</option>
              <option value="mh">Maharshtra</option>
              <option value="ts">Telgana</option>
              <option value="ap">Andhrapradesh</option>
            </select>
            </div>
           <button onClick={add}>Login</button>
          
           <p>Already Registered ?<Link to="/">Click here</Link></p>
           
         </div>
    </div>
  )
}

export default Register