import React from 'react'
import Header from "./Header"
import Navbar from './Navbar';
import img from "./img.jpg"

function App() {
    return (
        <div>
      <img src={img} alt={img} id='img'/>
         
      
    
          <Header/>
          <Navbar/> 
         
         
          
        </div>
    )
}

export default App;
