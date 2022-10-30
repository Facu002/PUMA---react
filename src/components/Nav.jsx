import React from 'react'
import {NavLink} from 'react-router-dom'

import logoPuma from '../img/puma-logo-png-26.png'

function Nav() {
  return (
    <div  className='nav'>
      <NavLink to="/">
      <img className='puma-logo' src={logoPuma} alt="puma-logo"/>
      </NavLink>

    </div>
  )
}

export default Nav