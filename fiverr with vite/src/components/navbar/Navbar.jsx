import React from 'react'
import './navbar.scss'

const navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <span className='text'>fiverr</span>
          <span className='dot'>.</span>
        </div>
        <div className='links'>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a seller</span>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default navbar
