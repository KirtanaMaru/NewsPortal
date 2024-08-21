import React from 'react'
import { useContext ,useEffect,useState} from 'react'
import { useNavigate ,Link, Outlet} from 'react-router-dom'
import Ct from './Ct'



const Home = () => {
  let obj=useContext(Ct)
  let navigate = useNavigate()
  useEffect(()=>{
   if(obj.data.token=="")
    navigate("/")
  },[])


  return (
   <div className="con">
    <div className="sidemenu">
        <Link to="/home/">Allpost</Link>
        <Link to="/home/movie">Movies</Link>
        <Link to="/home/edu">Edu</Link>
        <Link to="/home/sports">Sports</Link>
        <Link to="/home/news">News</Link>
        <Link to="/home/me">Donebyme</Link>
        <Link to="/home/star">Stared</Link>
    </div>
    <div className="maincon">
      <Outlet/>
    </div>
    
       
   </div>
  )
}

export default Home