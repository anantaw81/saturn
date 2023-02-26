import React from 'react'
import './requestdemo.scss'
import req_demo from "../assets/images/requestdemo/req-demo.png";

const RequestDemo = () => {
  return (
    <div className='c-rd container p-t-60 p-b-60'>
      <div className='rd-left'>
        <img src={req_demo}></img>
      </div>
      <div className='rd-right'>
        <div className='rd-title title'>
          Creating Financial Plan That Fits Your Lifestyle
        </div>
        <div className='rd-content body-text m-t-40 m-b-40'>
Learn how two big banks, BBVA and ABN AMRO, are responding and changing according to sustainability principles. Learn how two big banks, BBVA and ABN AMRO, are responding and changing according to sustainability
        </div>
        <button className='btn-base btn-black'>
          Request Demo
        </button>
      </div>
    </div>
  )
}

export default RequestDemo