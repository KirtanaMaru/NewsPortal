import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios'
import Ct from './Ct'

const Allpost = () => {
  let [post,setPost]=useState([])
  let obj=useContext(Ct)
  useEffect(()=>{
    axios.get("http://localhost:5000/getpost").then((res)=>{
       setPost(res.data)
       console.log(res.data)
    })
  },[])
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
              <p>Posted By:{item.name}</p>
              <p>Date:{new Date(item.date).toLocaleDateString()}</p>
            </div>
            <div><button onClick={()=>wish(item)}>Add to Wishlist</button></div>
          </div>)
        })
      }
    </div>
  )
}

export default Allpost
