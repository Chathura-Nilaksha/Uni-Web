import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark_arrow.jpg"

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
      <div className="hero-text">
        <h1>Better Education for a better world</h1>
        <p>
          Our vision is to empower students with the knowledge, skills and experience.
        </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
