import React from 'react'
import './style.css'

const HeroSlider = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide rounded-1 p-3 mt-2" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div className="carousel-inner rounded-5">
        <div className="carousel-item active position-relative">
          <img src="/heroSlider/slider-1.png" className="d-block w-100" alt="slider-1" />
          <div className="custom-caption mt-5">
            <h1 className="display-2 mb-40">
              Don’t miss amazing
              <br />
              grocery deals
            </h1>
            <p className="mb-65">Sign up for the daily newsletter</p>

            <div className='send-message mt-5'>
              <input type="text" placeholder='Your email address' />
              <button type='button'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="carousel-item position-relative">
          <img src="/heroSlider/slider-2.png" className="d-block w-100" alt="slider-2" />
          <div className="custom-caption mt-5">
            <h1 className="display-2 mb-40">
              Fresh Vegetables
              <br />
              Big discount
            </h1>
            <p className="mb-65">Save up to 50% off on your first order</p>

            <div className='send-message mt-5'>
              <input type="text" placeholder='Your email address' />
              <button type='button'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default HeroSlider