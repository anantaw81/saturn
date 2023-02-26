import React from 'react'
import './footer.scss'
import sms_star from "../assets/images/footer/sms-star.png";
import call_calling from "../assets/images/footer/call-calling.png";
import wallet from "../assets/images/footer/wallet.png";
import fb from "../assets/images/footer/fb.png";
import linkedin from "../assets/images/footer/linkedin.png";
import twitter from "../assets/images/footer/twitter.png";
import logo from "../assets/images/logo.png"

function Footer() {
  return (
    <div className='c-footer container'>
      <div className='footer-logo m-b-30'>
        <img src={logo}></img>
        <p className='subtitle'>Deisuko</p>
      </div>
      <div className='footer-main'>
        <div className='footer-left'>
          <div className='title-s footer-title m-b-36'><span>Join</span> Your Expectation</div>
          <div className='body-text footer-desc m-b-68'>
            Learn how two big banks, BBVA and ABN AMRO, are responding and changing according to sustainability principles. Learn how two big banks, BBVA and ABN AMRO, are responding and changing according to sustainability
          </div>
          <div className='footer-social'>
            <div className='footer-social-circle'>
              <img src={fb}></img>
            </div>
            <div className='footer-social-circle'>
              <img src={linkedin}></img>
            </div>
            <div className='footer-social-circle'>
              <img src={twitter}></img>
            </div>
          </div>
        </div>
        <div className='footer-right'>
          <div className='footer-input'>
            <div className='form-input'>
              <img src={sms_star} className='icon'></img>
              <input className='input-field' type='text' placeholder='Enter email address' ></input>
            </div>
            <div className='form-input'>
              <img src={call_calling} className='icon'></img>
              <input className='input-field' type='text' placeholder='Phone number' ></input>
            </div>
            <div className='form-input'>
              <img src={wallet} className='icon'></img>
              <input className='input-field' type='text' placeholder='Select service' ></input>
            </div>
          </div>
          <div className='footer-button'>
            <div className='btn-base btn-yellow display-inline-block m-t-30'>Request Demo</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer