import React from 'react'
import './benefits.scss'
import global from '../assets/images/hero/global.svg'
import crown from '../assets/images/hero/crown.svg'
import radar from '../assets/images/hero/radar.svg'
import shield_tick from '../assets/images/hero/shield-tick.svg'
import star from '../assets/images/hero/star.svg'


function Benefits() {
  const benefitsData = [
    {
      color: "yellow",
      title: "Daily Transaction",
      subtitle: "30+ Actions",
      img: crown
    }, {
      color: "blue",
      title: "Eazy Access",
      subtitle: "10 Devices",
      img: radar
    }, {
      color: "green",
      title: "100% Secure",
      subtitle: "100% Secure",
      img: shield_tick
    }, {
      color: "pale",
      title: "31.3k Users",
      subtitle: "Top Service",
      img: global
    }
  ]
  return (
    <div className='c-benefits container'>
      {benefitsData.map((benefit, index) => (
        <div key={index} className={`benefit b-${benefit.color}`}>
          <div className='benefit-icon'>
            <img src={benefit.img}></img>
          </div>
          <div className='benefit-info'>
            <div className='benefit-wiggles'>
              <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.3" d="M16.3056 2.50388C17.4028 0.26265 20.5972 0.26265 21.6944 2.50388L22.1299 3.39346C22.875 4.91531 24.7316 5.51858 26.2289 4.72529L27.1041 4.26159C29.3091 3.09331 31.8935 4.97098 31.4638 7.4291L31.2933 8.40476C31.0015 10.0739 32.149 11.6533 33.8266 11.8915L34.8072 12.0308C37.2778 12.3818 38.2649 15.4199 36.4724 17.156L35.761 17.845C34.5438 19.0239 34.5438 20.9761 35.761 22.155L36.4724 22.844C38.2649 24.5801 37.2778 27.6182 34.8072 27.9692L33.8266 28.1085C32.149 28.3467 31.0015 29.9261 31.2933 31.5952L31.4638 32.5709C31.8935 35.029 29.3091 36.9067 27.1041 35.7384L26.2289 35.2747C24.7316 34.4814 22.875 35.0847 22.1299 36.6065L21.6944 37.4961C20.5972 39.7374 17.4028 39.7374 16.3056 37.4961L15.8701 36.6065C15.125 35.0847 13.2684 34.4814 11.7711 35.2747L10.8959 35.7384C8.69087 36.9067 6.10648 35.029 6.53619 32.5709L6.70674 31.5952C6.99853 29.9261 5.85104 28.3467 4.17344 28.1085L3.19283 27.9692C0.722239 27.6182 -0.26491 24.5801 1.52757 22.844L2.23903 22.155C3.45617 20.9761 3.45617 19.0239 2.23904 17.845L1.52757 17.156C-0.26491 15.4199 0.722239 12.3818 3.19283 12.0308L4.17344 11.8915C5.85104 11.6533 6.99853 10.0739 6.70674 8.40476L6.53619 7.4291C6.10648 4.97098 8.69087 3.09331 10.8959 4.26159L11.7711 4.72529C13.2684 5.51858 15.125 4.91531 15.8701 3.39346L16.3056 2.50388Z" fill="currentColor"/>
              </svg>

            </div>
            <div className='benefit-title subtitle-2'>{benefit.title}</div>
            <div className='benefit-subtitle'>{benefit.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Benefits