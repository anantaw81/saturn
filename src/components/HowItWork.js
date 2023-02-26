import React from 'react';
import './howitwork.scss';

function HowItWork() {
  const options = [{
    title: "Data Secure",
    body: "We keep your data safe",
    img: "data-secure"
  }, {
    title: "24/7 Support",
    body: "We keep your data safe",
    img: "247-secure"
  }, {
    title: "Account Data",
    body: "We keep your data safe",
    img: "account-data"
  }, {
    title: "Multiple Actions",
    body: "We keep your data safe",
    img: "multiple-actions"
  }]

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
          {options.map((data, index) =>
        <div className='hiw-option' key={index}>
          <div className='hiw-icon'>
            <img src={require("../assets/images/hiw/" + "account-data" + ".png")}></img>
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