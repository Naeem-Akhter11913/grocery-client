import React from 'react'
import './style.css';


const SliderComponent = () => {
  return (
    <div className='slider-bg-img d-flex justify-content-between align-items-end mx-3 rounded-3 gap-5'>
      <div className='d-flex justify-content-center flex-column h-100 p-5'>
        <h2>Stay home & get your daily <br />
          needs from our shop</h2>
        <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
        <div className='send-message mt-5'>
          <input type="text" placeholder='Your email address' />
          <button type='button'>Subscribe</button>
        </div>
      </div>
      <div className='slider-img-container'>
        <img src="/slider-component/banner-9.png" alt="Slider" className='slider-img' />
      </div>
    </div>
  )
}

export default SliderComponent