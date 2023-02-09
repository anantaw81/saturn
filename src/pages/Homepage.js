import React from 'react'
import "./homepage.scss"
import Hero from '../components/Hero'
import Header from '../components/Header'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import HowItWork from '../components/HowItWork'
import RequestDemo from '../components/RequestDemo'
import Payme from '../components/Payme'

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
      <section id='banner'>
        <Banner/>
      </section>
      <section id='requestdemo'>
        <RequestDemo/>
      </section>
      <section id='howitwork'>
        <HowItWork/>
      </section>
      <section id='payme'>
        <Payme/>
      </section>
      <section id='footer'>
        <Footer/>
      </section>
    </main>
  )
}

export default Homepage