import React from 'react'
import "./About.css"
//import about_img from
import play_icon from "../../assets/play_icon.jpg"

const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            
            <img src="" alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' 
                onClick={()=>{
                    setPlayState(true);
                }}/>

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Making Tomorrow's Leaders Today</h2>
            <p>
                put the 1st para here
            </p>
            <p>
                put the 2nd para here
            </p>
            <p>
                put the 3rd para here
            </p>
        </div>
      
    </div>
  )
}

export default About
