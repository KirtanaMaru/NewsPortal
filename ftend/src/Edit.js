import React, { useState,useEffect,useContext } from 'react'
import axios from "axios"
import Ct from "./Ct"
import { useNavigate } from 'react-router-dom'

const Edit = () => {
    let obj= useContext(Ct)
    let navigate=useNavigate()

  let [post,setPost] = useState({"title":"","body":"","cat":""})
  useEffect(()=>{
      if(obj.data.token==""){
        navigate("/")
      }
      else{
        setPost(obj.data.item)
      }
  },[])
  let fun=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})
  }

  let upd=()=>{
    console.log("yes")
    axios.post("http://localhost:5000/upd",post).then((res)=>{
      navigate("/home/me")
    })
  }
  return (
    <div className='form'>
    <div className='card'>
        <input type="text" name="title" onChange={fun} value={post.title}/>
        Category:<select value={post.cat} onChange={fun} name="cat">
                 <option value="" selected disabled>Select Option</option>
                 <option value="ent">Movies</option>
                 <option value="news">News</option>
                 <option value="sports">Sports</option>
                 <option value="edu">Education</option>
                 </select>
        <textarea name="body" onChange={fun} value={post.body}></textarea>
        <button onClick={upd}>Update Post</button>
        
        </div>
    </div>
  )
}

export default Edit