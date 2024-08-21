import React, { useContext,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'


const Nav = () => {
  let obj=useContext(Ct)
  let navigate = useNavigate()
  useEffect(()=>{
   if(obj.data.token=="")
    navigate("/")
  },[])
  return (
    <nav>
        {obj.data.token!="" && <Link to="/home">Home</Link>}
        {obj.data.token!="" && <Link to="/addpost">Add</Link>}
         {obj.data.token!="" && <Link to="/contact">Contact</Link>}
          {obj.data.token!="" && <Link to="/noofreg">NoOfReg</Link>}
            {obj.data.token!="" && <Link to="/logout">Logout</Link>}
              {obj.data.token!="" && <div><i className="fa-solid fa-user"></i>{obj.data.name}</div>}
              {obj.data.token=="" && <Link to="/">Login</Link>}
              {obj.data.token=="" && <Link to="/reg">Register</Link>}
              
              
    </nav>
  )
}

export default Nav