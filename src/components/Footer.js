import React from 'react'
import './footer.scss'

function Footer() {
  return (
    <div className='c-footer container'>
      <div className='footer-logo'>
        <img></img>
        <p>Deisuko</p>
      </div>
      <div className='footer-main'>
        <div className='footer-left'>
          <div className='title-s footer-title m-b-36'><span>Join</span> Your Expectation</div>
          <div className='body-text footer-desc m-b-68'>
            Learn how two big banks, BBVA and ABN AMRO, are responding and changing according to sustainability principles. Learn how two big banks, BBVA and ABN AMRO, are responding and changing according to sustainability
          </div>
          <div className='footer-social'>
            <div className='footer-social-circle'></div>
            <div className='footer-social-circle'></div>
            <div className='footer-social-circle'></div>
          </div>
        </div>
        <div className='footer-right'>
          <div className='footer-input'>
            <img></img>
            <input type='text'></input>
          </div>
          <div className='btn-base btn-yellow display-inline-block'>Request Demo</div>
        </div>
      </div>
    </div>
  )
}

export default Footer