import React from 'react'
import profile2User from "../assets/images/profile-2user.png"
import usa from "../assets/images/usa.png"
import logo from "../assets/images/logo.png"
import "./homepage.scss"

const Homepage = () => {
  return (
    <main className='c-homepage'>
      <section id='header' className='s-header'>
        <div className='header-logo'>
          <img src={logo}/>
          <span>Deisuko</span>
        </div>
        <div>
          <ul className='header-menu'>
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
            <span>USA</span>
          </div>
        </div>
      </section>
      <section id='hero'>
      
      </section>
    </main>
  )
}

export default Homepage