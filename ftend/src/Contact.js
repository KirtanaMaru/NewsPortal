import React from 'react'
import { useContext ,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'
const Contact = () => {
  let obj=useContext(Ct)
  let navigate = useNavigate()
  useEffect(()=>{
   if(obj.data.token=="")
    navigate("/")
  },[])
  let [data,setData] = useState({"to":"","from":"","sub":""})

  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  return (
    <div className='form'>
    <div className='card'>
        To:<input type="text" name="to" onChange={fun} value={data.name}/>
        From:<input type="text" name="from" onChange={fun} value={data.from}/>
        Message:<textarea name="sub" onChange={fun} value={data.sub}></textarea>
        
        <button>Send</button>
        
        </div>
    </div>
  )
}

export default Contact