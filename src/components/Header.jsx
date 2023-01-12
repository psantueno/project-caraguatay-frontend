  import React from 'react'
import { Menu } from './Menu'
import { ProfileButton } from './ProfileButton'
import escudo from '../assets/escudo.png'
import './Header.css'
  
  export const Header = () => {
    return (
        <>
        <div className='main-div-header'>
            <ProfileButton/>
            <img src={escudo} className="escudo"/>
            <Menu/>            
        </div>
        <hr></hr>
        </>
    )
  }
  