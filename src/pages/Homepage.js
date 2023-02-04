import React from 'react'
import "./homepage.scss"
import Hero from '../components/Hero'
import Header from '../components/Header'
import Benefits from '../components/Benefits'

const Homepage = () => {
  return (
    <main className='c-homepage'>
      <section id='header'>
        <Header/>
      </section>
      <section id='hero'>
        <Hero/>
        <Benefits/>
      </section>
    </main>
  )
}

export default Homepage