'use client'
import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import './style.css'
import { ArrowDown, Headset, LevelRows } from '@/utils/Arrows'
import navContent from './middleContent'
import { naveType } from '@/utils/types'

const Loader = dynamic(() => import('../loader/loader'), { ssr: false });
const HoverComponent = dynamic(() => import('../nav-hover/HoverComponent'), { loading: () => <Loader /> })

const ScondeNavebar = () => {
  const [navItems, setNavItems] = useState<naveType[]>([...navContent])
  const [hoverIndex, setHoverIndex] = useState<number | null>(-1);

  const detectDOMHeight = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState<boolean>(false);


  useEffect(() => {
    if (navContent && Array.isArray(navContent)) {
      setNavItems([...navContent])
    }
  }, []);


  useEffect(() => {
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 150) {
        setIsInView(true);
      }
      if (scrollTop === 0) setIsInView(false)

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={`d-flex justify-content-between border w-100 bg-white border-1 px-2 mt-3 mb-3 custom-second-padding ${isInView ? 'fixed-navbar' : ''}`} ref={detectDOMHeight}>
      <div className='left-content d-flex align-items-center'>
        <button className='btn btn-success'>
          <LevelRows />
          <span className='mx-2 middle-font-size'>Browse All Categories</span>
          <ArrowDown />
        </button>
      </div>

      <div className='middle-content d-flex gap-4 align-items-center custom-gap'>
        {navItems.map((item, index) => (
          <HoverComponent
            key={index}
            item={item}
            index={index}
            setHoverIndex={setHoverIndex}
            hoverIndex={hoverIndex}
          />
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
