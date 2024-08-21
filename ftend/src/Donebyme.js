import React, { useState,useEffect,useContext } from 'react'
import axios from "axios"
import Ct from "./Ct"
import { useNavigate } from 'react-router-dom'

const Donebyme = () => {
    let [post,setPost]=useState([])
    let [f,setF]=useState(true)
    let obj = useContext(Ct)
    let navigate = useNavigate()
    useEffect(()=>{
      axios.get(`http://localhost:5000/getbycat/uid/${obj.data._id}`).then((res)=>{
         setPost(res.data)
         console.log(res.data)
      })
    },[f])

    let edit=(item)=>{
      obj.setLogin({"item":item})
      navigate("/home/edit")
    }

    let del=(id)=>{
      axios.delete(`http://localhost:5000/del/${id}`).then((res)=>{
        setF((f)=>!f)
     })
    }

    let wish=(item)=>{
      let data = {...item,"wuid":obj.data._id}
      axios.post("http://localhost:5000/wladd",data).then((res)=>{
        alert("Add to wishlist")
      })
    }

    return (
      <div className='postcon'>
        {
          post.map((item)=>{
            return(<div className='postcard'>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className='author'>
                <p>{item.name}</p>
                <p>{item.date}</p>
              </div>
              <div>
                 <button onClick={()=>edit(item)}>Edit</button>
                 <button onClick={()=>del(item._id)}>Delete</button>
                 <button onClick={()=>wish(item)}>Add to Wishlist</button>
              </div>
            </div>)
          })
        }
      </div>
    )
}

export default Donebyme
