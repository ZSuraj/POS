import React from 'react'

import { NavLink } from 'react-router-dom'
import './GridMenu.css'

const Gridmenu = () => {
  return (
    <div className='gridmenu-container'>
        <div className='menu-list'>
            <NavLink to='/menu/starter' className='menu-nav-link' activeclassName='active'><p>Starter</p></NavLink>
            <NavLink to='/menu/rotis' className='menu-nav-link' activeclassName='active'><p>Rotis</p></NavLink>
            <NavLink to='/menu/gravies' className='menu-nav-link' activeclassName='active'><p>Gravies</p></NavLink>
            <NavLink to='/menu/pizza' className='menu-nav-link' activeclassName='active'><p>Pizza</p></NavLink>
            <NavLink to='/menu/dessert' className='menu-nav-link' activeclassName='active'><p>Dessert</p></NavLink>
            <NavLink to='/menu/soups' className='menu-nav-link' activeclassName='active'><p>Soups</p></NavLink>
        </div>
    </div>
  )
}

export default Gridmenu