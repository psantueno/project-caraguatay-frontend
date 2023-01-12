import React, { useState } from 'react';
import './Menu.css';



export const Menu = () => {

    const openNav = (event)=>{
        document.getElementById("mySidenav").style.width = "250px";        
    }
    
    const closeNav =(event)=> {
        document.getElementById("mySidenav").style.width = "0";
    }
    
    const [menu,setMenu] = useState(false)
        const toggleMenu = ()=>{
            setMenu(!menu)
        }

  return (
    <>
    <div id="mySidenav" className={`sidenav ${menu?'is-active':''}`} onClick={toggleMenu}>
        <a href="#">About<hr/></a>
        <a href="#">Services<hr/></a>
        <a href="#">Clients<hr/></a>
        <a href="#">Contact<hr/></a>
    </div>
    <div id="main">
        <span className="span-menu" onClick={toggleMenu}>&#9776;</span>
    </div>
    </>
  )
}
