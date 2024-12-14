import React from 'react'

import Navbar from "./components/navbar/Navbar.jsx"
import Hero from './components/hero/Hero.jsx'
import Programs from './components/programs/Programs.jsx'
import Title from './components/title/title.jsx'
import About from './components/about/About.jsx'
import Campus from './components/campus/Campus.jsx'
import Testimonials from './components/testimonials/testimonials.jsx'
import Contact from './components/contact/Contact.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        
        <Title subTitle="Our Program" title="What we Offer"/>
        <Programs/>
        {/* <Title subTitle="Gallery" title="Campus Photos"/>  */}
          {/* remove this above to identify the error */}
        <About/>
        <Title subTitle="Gallery" title="Campus Photos"/>
        <Campus/>
        <Title subTitle="TESTIMONIALS" title="What Students Says"/>
        <Testimonials/>
        <Title subTitle="Contact us" title="Get in Toucgh"/>
        <Contact/>

      </div>
      
    </div> 
  )
}

export default App
