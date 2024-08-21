import React, { Component, useState } from 'react'
import { useContext ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Ct from './Ct'
const NoOfReg = () => {
  let obj=useContext(Ct)
  let [list,setList] = useState([])
  let navigate = useNavigate()
  useEffect(()=>{
    if(obj.data.token==""){
      navigate("/")
    }
    axios.get("http://localhost:5000/getuser").then((res)=>{
       setList(res.data)
       console.log(res.data)
    })
  },[])
  
  let fun=(id)=>{
     navigate("/contact")
  }
  
  return (
    <div className='nofregcon'>
      <h1>Registered User</h1>
      <br></br>
      <table>
        <thead>
          <th>Sr no.</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phno</th>
          <th>State</th>
          <th>Contact</th>
        </thead>
        <tbody>
        {
          
          list.map((item,index)=>{
             return(
           
             <tr>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item._id}</td>
              <td>{item.phno}</td>
              <td>{item.st}</td>
              <td><button onClick={()=>fun()}>Contact</button></td>
             </tr>
             )
             
          })
        }
        </tbody>
      </table>

    </div>
  )
}

export default NoOfReg