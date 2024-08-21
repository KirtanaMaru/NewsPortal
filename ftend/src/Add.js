import React, { useState,useContext,useEffect} from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add = () => {
    let obj= useContext(Ct)
    let navigate=useNavigate()

  let [post,setPost] = useState({"title":"","body":"","cat":""})
  let [msg,setMsg]= useState()
  useEffect(()=>{
      if(obj.data.token==""){
        navigate("/")
      }
  })
  let fun=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})
  }

  let addPost=()=>{
    axios.post("http://localhost:5000/add",{...post,"name":obj.data.name,"uid":obj.data._id,"date":new Date().toLocaleDateString()}).then((res)=>{
      setMsg(res.data.msg)
      setPost({"title":"","body":"","cat":""})
    })
  }
  return (
    <div className='form'>
    <div className='card'>
        {msg}
        <input type="text" name="title" onChange={fun} value={post.title}/>
        <div>Category:<select value={post.cat} onChange={fun} name="cat">
                 <option value="" selected disabled>Select Option</option>
                 <option value="ent">Movies</option>
                 <option value="news">News</option>
                 <option value="sports">Sports</option>
                 <option value="edu">Education</option>
                 </select>
                 </div>
        <textarea name="body" onChange={fun} value={post.body}></textarea>
        <button onClick={addPost}>Add Post</button>
        
        </div>
    </div>
  )
}

export default Add
