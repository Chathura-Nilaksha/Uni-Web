import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next_icon.png'
import back_icon from '../../assets/back_icon.png'
import user_1 from '../../assets/user_1.jpg'
import user_2 from '../../assets/user_2.jpg'
import user_3 from '../../assets/user_3.jpg'
import user_4 from '../../assets/user_4.jpg'

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if(tx>-50){tx -= 25;}
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () => {
    if(tx<0){tx += 25;}
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials' id='testimonials'>
      <img src={next_icon} alt="" className='next-btn'
        onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn'
        onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>

          <li>

            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>1-Sumudu Sathira</h3>
                  <span>Former student of Our University</span>
                </div>
              </div>
              <p>
                Here insert the things he is saying about the University.
              </p>
            </div>

          </li>

          <li>

            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                    <h3>2-Ranil Sathira</h3>
                    <span>Former student of Our University</span>
                </div>
              </div>
              <p>
                Here insert the things he is saying about the University.
              </p>
            </div>

          </li>

          <li>

            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                    <h3>3-Kasun Sathira</h3>
                    <span>Former student of Our University</span>
                </div>
              </div>
              <p>
                Here insert the things he is saying about the University.
              </p>
            </div>

          </li>

          <li>

            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                  <div>
                    <h3>4-Chanaka Sathira</h3>
                    <span>Former student of Our University</span>
                  </div>
              </div>
              <p>
                Here insert the things he is saying about the University.
              </p>
            </div>

          </li>


        </ul>
      </div>
    </div>
  )
}

export default Testimonials
