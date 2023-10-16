import React from 'react'
import Login from "./Login";
import Singup from "./Singup"
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Header() {
    return (
       <div>
     
        <h1 className='header'>H</h1>
        <input type="text" placeholder="Search here"id='search'/> 
    <Router>
        
   
  
    <Link to="/singup"id='login'>SingUp</Link>
    <Link to="/login" id='login1'>login</Link> 
    <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/singup" element={<Singup/>} />
    </Routes>
    </Router>
   
       </div> 
    )
}
export default Header;
