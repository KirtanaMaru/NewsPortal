import React, { useContext, useEffect,useState } from 'react'
import axios from 'axios'
import Ct from './Ct'

const Stared = () => {
  let [post,setPost] =useState([])
  let obj = useContext(Ct)
  useEffect(()=>{
    axios.get(`http://localhost:5000/getwish/${obj.data._id}`).then((res)=>{
      console.log(res.data)
      setPost(res.data)
    })
  },[])
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
          </div>)
        })
      }
    </div>
  )
}

export default Stared
