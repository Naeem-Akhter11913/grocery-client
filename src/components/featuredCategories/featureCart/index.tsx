import React from 'react'
import './style.css'
import { LeftArrow, RightArrow } from '@/utils/Arrows'

const FeatureCart = () => {
  return (
    <div className='feature-cart'>
      <div className='feature-img-1'>
        <div className='feature-img-1-text'>
          <h3>Everyday Fresh &
            Clean with Our
            Products</h3>
          <button type='button'>Shop Now <span><RightArrow /></span></button>
        </div>
      </div>
      <div className='feature-img-2'>
        <div className='feature-img-1-text'>
          <h3>Make your Breakfast
            Healthy and Easy</h3>
          <button type='button'>Shop Now <span><RightArrow /></span></button>
        </div>
      </div>
      <div className='feature-img-3'>
        <div className='feature-img-1-text'>
          <h3>The best Organic
            Products Online</h3>
          <button type='button'>Shop Now <span><RightArrow /></span></button>
        </div>
      </div>
    </div>
  )
}

export default FeatureCart