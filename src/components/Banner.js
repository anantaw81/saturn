import React from 'react';
import './banner.scss';
import banner_arrow from "../assets/images/banner/banner-arrow.png";
import banner_line from "../assets/images/banner/banner-line.png";
import banner_shadow from "../assets/images/banner/banner-shadow.png";
import banner_sparkle from "../assets/images/banner/banner-sparkle.png";
import banner_mc from "../assets/images/banner/banner-mc.png";
import banner_paypal from "../assets/images/banner/banner-paypal.png";
import banner_person from "../assets/images/banner/banner-person.png";
import banner_visa from "../assets/images/banner/banner-visa.png";
import banner_services from "../assets/images/banner/banner-services.png";
import banner_users from "../assets/images/banner/banner-users.png";
// import banner_thropy from "../assets/images/banner/banner_thropy.png";

function Banner() {
  return (
    <div className='c-banner'>
      <div className='container'>
        <div className='title banner-title-container p-t-60'><div className='banner-title'>Send Your Money From Anywhere You Like</div></div>
        <div className='banner-placeholder'>
          <div className='banner-layer-1'>
            <img className='banner-shadow scale-up-center' src={banner_shadow}></img>
            <div className="banner-circle-orange"></div>
            <img className='banner-line' src={banner_line}></img>
            <div className='banner-circle-yellow'></div>
            <img className='banner-sparkle' src={banner_sparkle}></img>
            <img className='banner-arrow' src={banner_arrow}></img>
            <img className='banner-person' src={banner_person}></img>
            <img className='banner-paypal' src={banner_paypal}></img>
            <img className='banner-visa' src={banner_visa}></img>
            <img className='banner-mc' src={banner_mc}></img>
            <img className='banner-services' src={banner_services}></img>
            <img className='banner-users' src={banner_users}></img>
            {/* <img className='banner-thropy' src={banner_thropy}></img> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner