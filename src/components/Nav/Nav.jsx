import React from 'react'
import nav_logo from '../../images/LOS.png'
import './Nav.css'

const Nav = () => {
  return (
    <section id='nav'>
    <div className='nav'>
      <img src={nav_logo} alt="" />
      <a href="ezq">01.HISTORY</a>
      <a href="ezq">02.TEAM</a>
    </div>
    </section>
  )
}

export default Nav