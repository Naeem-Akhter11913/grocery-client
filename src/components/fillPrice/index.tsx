'use client'
import React from 'react';
import './style.css';
import GreyLine from '../greyLine';

const FillPrice = () => {
  const handleChange = () => {

  }
  return (
    <div>
      <div className="shadow-sm rounded-4 p-4">
        <GreyLine title="Fill by price" />

        <div className="range-values">
          <span>From: $500</span>
          <span>To: $1,000</span>
        </div>
        <input onChange={handleChange} type="range" className="form-range mb-3" min="0" max="1000" value="500" />


        <div className="mb-3">
          <strong>Color</strong>
          <div className='responsive-class'>
            <div className="form-check">
              <input onChange={handleChange} className="form-check-input" type="checkbox" id="colorRed" />
              <label className="form-check-label" htmlFor="colorRed">Red (56)</label>
            </div>
            <div className="form-check">
              <input onChange={handleChange} className="form-check-input" type="checkbox" id="colorGreen" />
              <label className="form-check-label" htmlFor="colorGreen">Green (78)</label>
            </div>
            <div className="form-check">
              <input onChange={handleChange} className="form-check-input" type="checkbox" id="colorBlue" />
              <label className="form-check-label" htmlFor="colorBlue">Blue (54)</label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <strong>Item Condition</strong>
          <div className='responsive-class'>
            <div className="form-check">
              <input onChange={handleChange} className="form-check-input" type="checkbox" id="conditionNew" />
              <label className="form-check-label" htmlFor="conditionNew">New (1506)</label>
            </div>
            <div className="form-check">
              <input onChange={handleChange} className="form-check-input" type="checkbox" id="conditionRefurbished" />
              <label className="form-check-label" htmlFor="conditionRefurbished">Refurbished (27)</label>
            </div>
            <div className="form-check">
              <input onChange={handleChange} className="form-check-input" type="checkbox" id="conditionUsed" />
              <label className="form-check-label" htmlFor="conditionUsed">Used (45)</label>
            </div>
          </div>
          <button type='button' className='btn btn-outline-success'>Filter</button>
        </div>
      </div>
    </div>
  )
}

export default FillPrice