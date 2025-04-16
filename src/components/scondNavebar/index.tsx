'use client'
import React, { useEffect, useState } from 'react'
import './style.css'
import { ArrowDown, ArrowUp, Headset, LevelRows } from '@/utils/Arrows'
import navContent from './middleContent'
import { naveType } from '@/utils/types'

const ScondeNavebar = () => {
  const [navItems, setNavItems] = useState<naveType[]>([])
  const [hoverIndex, setHoverIndex] = useState<number>(-1)

  useEffect(() => {
    if (navContent && Array.isArray(navContent)) {
      setNavItems([...navContent])
    }
  }, [])

  return (
    <div className='d-flex justify-content-between border border-1 px-2 mt-3 custom-second-padding'>
      <div className='left-content d-flex align-items-center'>
        <button className='btn btn-success'>
          <LevelRows />
          <span className='mx-2 middle-font-size'>Browse All Categories</span>
          <ArrowDown />
        </button>
      </div>

      <div className='middle-content d-flex gap-4 align-items-center custom-gap'>
        {navItems.map((item, index) => (
          <div
            key={item.label}
            className='d-flex align-items-center gap-1'
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            {item.icon && item.icon}
            <span className='middle-font-size'>{item.label}</span>
            {item.dropdown && (hoverIndex === index ? <ArrowUp /> : <ArrowDown />)}

          </div>
        ))}
      </div>

      <div className='rigth-content d-flex align-items-center'>
        <Headset />
        <div>
          <p className="mb-0 fs-2 py-0 text-success">1900 - 888</p>
          <p className="mb-0">24/7 Support Center</p>
        </div>
      </div>
    </div>
  )
}

export default ScondeNavebar
