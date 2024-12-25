import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// 12.8---23.21-Headers.jsx
// 12.9---stoped 1.09. but stop checking-again at 1.03.38
// 12.11--stoped 1.32.42 testi
// 12.14--completed above page
//      --stated contact us jsx -1.18.53
    // NET- ???? 
  //   const slideForward = () => {
  //   if(tx>-50){tx -= 25;}
  //   slider.current.style.transform = `translateX(${tx}%)`; <--??? THIS LINE-NET
  // }

// 12.15--sto---1.55.53-  2.03.36
// 12.17--2.34.56
// 12.19--
//    NET- Z index in css ?
//    TOMORROW-SEE HOW THE VEDIO IS PLAYING VIA USESTATE().


/////////////////////////
// SPECIAL FEATURES, LIBRARIES, APIs USED IN THIS PROJECT

// 1. web3forms --> For contact us forms
//      This helps to send inquiry messages (form submitions) to my 
//      registering email address.

// 2. For scroll the page---NPM DEPENDANCY
//      To install--> npm install react-scroll

/////////////////////////
// NOTES: CSS

// 1.
// when "," -> oonama ekakata adalai.
//      " " (without comma) -> mehi thiyana hema ekakma thiyena 
//                              HTML tag valata adalava. 
//Ex-1
// .slider ul {CSS} --> /*uses where both slider cls and ul tag nested way
//                        slider yatathe ul. */
//Ex-2
// .slider ul li {CSS} --> mehi thiyana hema ekakma thiyena HTML tag valata adalava.
//Ex-3
// .next-btn, .back-btn {CSS}  -->  /*Appling to any of theses clses */


// 2.
//  HOVER ACTION          .program:hover .caption {
//                            opacity: 1;
//                            padding-top: 0;
//                        }  
        
// 3.
// Special className typing way.
//        container is a one className.
//        Other--> ${sticky ? "dark-nav":""} is giving a dynamic className.
//        both inside {`  `}
//    className={ ` container ${sticky ? "dark-nav":""}  ` }  > 

// 4.
// Link tag-the way of Linking to Navigate.
//
//   <div className='programs' id='programs'> 
//      {/* id uses to Link tag purpose. If the to (target) 
//          of Link tag is same name as this above className,
//          then no need to use an "id" property.
//         (here "id" is inserting to the to(target) of the Link tag)  */}
//
//       <Link to='hero' smooth={true} offset={0} duration={500}></Link>                    