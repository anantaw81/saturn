import React from 'react'
import profile2User from "../assets/images/profile-2user.png"
import usa from "../assets/images/usa.png"
import logo from "../assets/images/logo.png"
import './header.scss'

function Header() {
  return (
    <section id='header' className='c-header container'>
      <div className='header-logo'>
        <img src={logo}/>
        <span className='subtitle-2'>Deisuko</span>
      </div>
      <div>
        <ul className='header-menu body-text  '>
          <li>Platform</li>
          <li>Resources</li>
          <li>Company</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className='header-user'>
        <img src={profile2User} alt="" srcset="" />
        <div>
          <img src={usa} alt="" />
          <span className='body-text'>USA</span>
        </div>
      </div>
    </section>
  )
}

export default Header