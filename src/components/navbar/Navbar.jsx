import React, { useState, useEffect } from 'react';
import './Navbar.css';
import NavPicture from "../../assets/react.svg";

const Navbar = () => {

  const [sticky, setSticky] = useState(false) ;

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
          window.scrollY > 50 ? setSticky(true):setSticky(false);
    })
  },[]); 
  

  return (
    <nav className={`container ${sticky ? "dark-nav":""}`}  > 
                    {/* N: above className is a special way.  */}
      <img className="logo" src={NavPicture} alt="" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
