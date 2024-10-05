import React, { useEffect } from 'react'
import { useState } from 'react'
import './navbar.scss'

const navbar = () => {

  const [active, setActive] = React.useState(false)

  const isActive = () => {
    window.scrollY > 100 ? setActive(true) : setActive(false)
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive)

    return () => {
      window.removeEventListener('scroll', isActive)
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className={active ? "navbar active" : "navbar"}>

      <div className='hamburger'>
        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"} onClick={handleMenu}></i>
      </div>
      <div className='container'>
        <div className='logo'>
          <span className='text'>fiverr</span>
          <span className='dot'>.</span>
        </div>
        <div className='links'>
          {/* <span>Fiverr Pro</span> */}
          <span>Explore</span>
          <span>English</span>
          {/* <span>Sign in</span> */}
          <span>Become a seller</span>
          <button className='linkSignIn'>Sign in</button>
          <button className='linkJoin'>Join</button>
        </div>
      </div>
      <div className='signIN'>
        <button className='SignInBtn'>Sign in</button>
        <button className='JoinBtn'>Join</button>
      </div>
      
    </div>
    
  )
}

export default navbar
