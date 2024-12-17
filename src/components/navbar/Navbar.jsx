import React, { useState, useEffect } from 'react';
import './Navbar.css';
import NavPicture from "../../assets/react.svg";
import { Link } from 'react-scroll';

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
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-160} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
              
      </ul>
    </nav>
  )
}

export default Navbar
