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
            <a href="/comunicados">Comunicados<hr/></a>
            <a href="/deportes">Deportes<hr/></a>
            <a href="/culturaTurismo">Cultura y Turismo<hr/></a>
            <a href="/historia">Historia<hr/></a>
            <a href="/puntoDigital">Punto Digital<hr/></a>
        </div>
        <div id="main" className='sidenav-button'>
            <span className="span-menu" onClick={toggleMenu}>&#9776;</span>
        </div>
    </>
  )
}
