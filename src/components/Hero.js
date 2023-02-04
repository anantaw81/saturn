import React from 'react'
import './hero.scss'
import mouse from '../assets/images/mouse.png'
import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/mastercard.png'
import iconyellow from '../assets/images/ic-yellow.png'
import iconorange from '../assets/images/ic-orange.png'


const Hero = () => {
  return (
    <div className='c-hero container'>
      <div className='hero-left'>
        <h1 className='title-s'>
          The Next Gen Payment <span className='s-underline'>Method</span> 
        </h1>
        <p className='body-text'>
          Learn how two big banks, BBVA and ABN AMRO, are responding and changing according to sustainability principles.
        </p>
        <div className='hero-cta'>
          <button>
            Request Demo
          </button>
          <div className='cta-scroll'>
            <div>
              <img src={mouse} alt="" />
            </div>
            <span className='body-text'>Scroll Down</span>
          </div>
        </div>
      </div>
      <div className='hero-right'>
        <div className='card bg-yellow' >
          <img src={iconyellow} alt="" />
          <div className='card-info'>
            <div className='info-head'>
              <span>Credit Card</span>
              <img src={visa} alt="" />
            </div>
            <div>
              <span>
              XXXX
              </span>
              <span>
              XXXX
              </span>
              <span>
              XXXX
              </span>
              <span>
              1654
              </span>
            </div>
          </div>
        </div>
        <div className='card bg-orange' >
          <img src={iconorange} alt="" />
          <div className='card-info'>
            <div className='info-head'>
              <span>Credit Card</span>
              <img src={mastercard} alt="" />
            </div>
            <div>
              <span>
              XXXX
              </span>
              <span>
              XXXX
              </span>
              <span>
              XXXX
              </span>
              <span>
              1654
              </span>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero