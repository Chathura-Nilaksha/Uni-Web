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

/////////////////////////
// NOTES: CSS

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



//  HOVER ACTION          .program:hover .caption {
//                            opacity: 1;
//                            padding-top: 0;
//                        }  
                    