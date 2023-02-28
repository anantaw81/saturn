import React from 'react'
import './payme.scss'
import payme from "../assets/images/payme/payme.png";

function Payme() {
  return (
    <div className='c-payme container p-b-60 p-t-60'>
      <div className='stack-back title-s'>
        PAYME
      </div>
      <div className='stack-front'>
        <div className='payme-left'>
          <div className='payme-title title m-b-20'>
            Pay By Check, Without Any of the Hassle.
          </div>
          <div className='payme-content body-text m-b-30'>
            Learn how two big banks, BBVA and ABN AMRO, are responding and changing according to sustainability principles. Learn how
          </div>
          <div className='btn-base btn-black display-inline-block'>
            Requests Demo
          </div>
        </div>
        <div className='payme-right'>
          <img className='payme-image' src={payme} alt="payme" />
        </div>
      </div>
    </div>
  )
}

export default Payme