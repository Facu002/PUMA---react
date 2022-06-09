import React from 'react'
import logoPuma from '../img/puma.svg'

function Nav() {
  return (
    <div className='nav'>
      <img className='puma-logo' src={logoPuma} alt="puma-logo"/>
    </div>
  )
}

export default Nav