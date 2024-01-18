import React from 'react'
import './Hero.css'
import arrow from '../Assets/Photos/arrow.png'
import hero_image from '../Assets/Photos/logo.jpeg'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
      <img src={hero_image} alt=''className='hero-image'/>
        </div>
      <div className="hero-right">
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow} alt=''/>
        </div>
        </div>
      </div>
  )
}