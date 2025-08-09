'use client'
import React from 'react'
import './style.css'
import { RightArrow } from '@/utils/Arrows';
import DailyBestSellsCardSlider from './components/DailyBestSellsCardSlider';

const DailyBestSells = () => {

  return (
    <div className='row mx-2 mt-3'>
      <div className='col-3'>
        <div className='cover-bg-image p-3'>
          <div className='daily-best-sale-text d-flex gap-5 flex-column mt-5'>
            <h1>Bring nature into your home</h1>
            <button type='button' className='mt-5'>Shop Now <span><RightArrow /></span></button>
          </div>
        </div>
      </div> 


      <div className="col-9">
        <DailyBestSellsCardSlider />
      </div>
    </div>
  )
}

export default DailyBestSells