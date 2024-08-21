import Ct from './Ct.js'
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from './Nav';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import NoOfReg from './NoOfReg';
import Home from './Home';
import { useState } from 'react';
import Logout from './Logout.js';
import Add from './Add.js';
import Allpost from './Allpost.js';
import Movies from './Movies.js';
import Edu from './Edu.js';
import Sports from './Sports.js';
import Donebyme from './Donebyme.js';
import Stared from './Stared.js';
import News from './News.js';
import Edit from './Edit.js';

function App() {
  let [data,setData] = useState({"token":"","name":"","_id":""})
  let  setLogin=(obj)=>{
      setData({...data,...obj})
   }
   let obj = {"data":data,"setLogin":setLogin}
  return (
    <BrowserRouter>
      <Ct.Provider value={obj}>
      { data.token!="" && <Nav/>}
       <Routes>
       <Route path="/" element={<Login/>}></Route>
       <Route path="/reg" element={<Register/>}></Route>
        <Route path="/home" element={<Home/>}>
        <Route path="/home/" element={<Allpost/>}/>
        <Route path="/home/movie" element={<Movies/>}/>
        <Route path="/home/edu" element={<Edu/>}/>
        <Route path="/home/me" element={<Donebyme/>}/>
        <Route path="/home/star" element={<Stared/>}/>
        <Route path="/home/news" element={<News/>}></Route>
        <Route path="/home/sports" element={<Sports/>}></Route>
        <Route path="/home/edit" element={<Edit/>}></Route>
        </Route>
        <Route path="/logout" element ={<Logout/>}></Route>
        <Route path="/addpost" element={<Add/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/noofreg" element={<NoOfReg/>}></Route>
        </Routes>
        </Ct.Provider>
    </BrowserRouter>
  )
}

export default App;
