import React from 'react';
import './howitwork.scss';
import hiw_icon from "../assets/images/hiw/hiw-icon.png";

function HowItWork() {
  return (
    <div className='c-hiw container'>
      <div className='hiw-left'>
        <div className='hiw-square'>
          <div className='hiw-title title'>
            HOW IT WORKS
          </div>
          <div className='hiw-content body-text'>
            Learn how two big banks, BBVA and ABN AMRO, are responding and
          </div>
        </div>
      </div>
      <div className='hiw-right'>
          {[1,2,3,4].map((data) =>
        <div className='hiw-option'>
          <div className='hiw-icon'>
            <img src={hiw_icon}></img>
          </div>
          <div className='hiw-data'>
            <div className='hiw-data-title'>Data Secure {data}</div>
            <div className='hiw-data-content'>We keep your data save</div>
          </div> 
        </div>
          )}
      </div>
    </div>
  )
}

export default HowItWork