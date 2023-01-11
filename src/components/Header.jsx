  import React from 'react'
import { Menu } from './Menu'
import { ProfileButton } from './ProfileButton'
import './Header.css'
  
  export const Header = () => {
    return (
        <div className='main-div-header'>
            <ProfileButton/>
            <p>Componente imagen?</p>
            <Menu/>            
        </div>
    )
  }
  