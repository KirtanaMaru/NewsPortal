import React, { useState,useEffect } from 'react'
import axios from "axios"

const Sports = () => {
  let [post,setPost]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/getbycat/cat/sports").then((res)=>{
       setPost(res.data)
       console.log(res.data)
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

export default Sports
