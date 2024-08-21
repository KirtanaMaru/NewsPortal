import React from 'react'
import {useContext,useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'

const Logout = () => {
  let obj=useContext(Ct)
  let navigate = useNavigate()
  useEffect(()=>{
    obj.setLogin({"token":"","name":"","email":""})
    navigate("/")
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Logout
