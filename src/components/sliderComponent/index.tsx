// import React from 'react'
// import './style.css';
// import '../heroSlider/style.css'


// const SliderComponent = () => {
//   return (
//     <div className='slider-bg-img d-flex justify-content-between align-items-end mx-3 rounded-3 gap-5'>
//       <div className='d-flex justify-content-center flex-column cccccc'>
//         <h2>Stay home & get your daily <br />
//           needs from our shop</h2>
//         <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
//         <div className='send-message'>
//           <input type="text" className='bg-white' placeholder='Your email address' />
//           <button type='button'>Subscribe</button>
//         </div>
//       </div>
      
//       <div className='slider-img-container border border-danger' >
//         <img src="/slider-component/banner-9.png" alt="Slider" className='slider-img' />
//       </div>
//     </div>
//   )
// }

// export default SliderComponent

import React from "react";
import "./style.css";

const SliderComponent = () => {
  return (
    <section className="slider" aria-label="Promotional banner">
      <div className="slider__content">
        <h2 className="slider__title">
          Stay home & get your daily <br />
          needs from our shop
        </h2>

        <p className="slider__subtitle">
          Start your daily shopping with <span className="slider__brand">Nest Mart</span>
        </p>

        <form className="newsletter" onSubmit={(e) => e.preventDefault()} aria-label="Subscribe to newsletter">
          <label className="visually-hidden" htmlFor="newsletter-email">Your email address</label>
          <input
            id="newsletter-email"
            type="email"
            className="newsletter__input"
            placeholder="Your email address"
            required
          />
          <button type="submit" className="newsletter__button">Subscribe</button>
        </form>
      </div>

      <div className="slider__image-wrap" role="img" aria-label="Grocery banner">
        <img src="/slider-component/banner-9.png" alt="" className="slider__image" />
      </div>
    </section>
  );
};

export default SliderComponent;
