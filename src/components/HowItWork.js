import React from 'react';
import './howitwork.scss';
import data_secure from '../assets/images/hiw/data-secure.png'
import twentyfour_support from '../assets/images/hiw/247-support.png'
import account_data from '../assets/images/hiw/account-data.png'
import multiple_actions from '../assets/images/hiw/multiple-actions.png'
import anchor from '../assets/images/hiw/anchor.svg'
import hightlight from '../assets/images/hiw/hightlight.svg'


function HowItWork() {
  const options = [{
    title: "Data Secure",
    body: "We keep your data safe",
    img: data_secure
  }, {
    title: "24/7 Support",
    body: "We keep your data safe",
    img: twentyfour_support
  }, {
    title: "Account Data",
    body: "We keep your data safe",
    img: account_data
  }, {
    title: "Multiple Actions",
    body: "We keep your data safe",
    img: multiple_actions
  }]

  return (
    <div className='c-hiw container'>
      <div className='hiw-left'>
        <img className='hiw-anchor' src={anchor}></img>
        <img className='hiw-highlight' src={hightlight}></img>
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
          {options.map((data, index) =>
        <div className='hiw-option' key={index}>
          <div className='hiw-icon'>
            <img src={data.img}></img>
          </div>
          <div className='hiw-data'>
            <div className='hiw-data-title'>{data.title}</div>
            <div className='hiw-data-content'>{data.body}</div>
          </div> 
        </div>
          )}
      </div>
    </div>
  )
}

export default HowItWork