'use client'
import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { ArrowDown, Headset, LevelRows } from '@/utils/Arrows'
import navContent from './middleContent';
import { naveType } from '@/utils/types'
import './style.css'
import './BrowserAllCategories.css'
import CategorySection from '../nav-hover/components/CategorySection';

const Loader = dynamic(() => import('../loader/loader'), { ssr: false });
const BrowserAllCategories = dynamic(() => import('./BrowserAllCategories'), { ssr: false, loading: () => <Loader /> });
const HoverComponent = dynamic(() => import('../nav-hover/HoverComponent'), { loading: () => <Loader />, ssr: false });

const ScondeNavebar = () => {
  const [navItems, setNavItems] = useState<naveType[]>([...navContent])
  const [hoverIndex, setHoverIndex] = useState<number | null>(-1);
  const [showCat, setShowCat] = useState<boolean>(false)

  const detectDOMHeight = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState<boolean>(false);
  const [showNaveCat, setShowNavCat] = useState<boolean>(false)


  const handleOpen = () => {
    setShowCat(!showCat);
  };

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
      if (scrollTop <= 63) setIsInView(false)

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
    {isInView && <div style={{ height: detectDOMHeight.current?.offsetHeight }}></div>}
    <div className={`border w-100 bg-white border-1 px-2 mb-3 custom-second-padding ${isInView ? 'fixed-navbar' : ''}`} ref={detectDOMHeight}>
      <div className='left-content d-flex align-items-center position-relative'>
        <button className='btn btn-success text-nowrap' onClick={handleOpen}>
          <LevelRows />
          <span className='mx-2 middle-font-size '>Browse All Categories</span>
          <ArrowDown />
        </button>
        {showCat && <div className="tooltip-wrapper">
          <BrowserAllCategories showCategory={showCat} />
        </div>}
      </div>

      <div className='middle-content'>
        {navItems.map((item, index) => {
          return item.label === 'Mega Menu' ? (
            <div
              key={index}
              className="position-relative"
              onMouseEnter={() => setShowNavCat(true)}
              onMouseLeave={() => setShowNavCat(false)}
            >
              <button className="btn">
                Mega Menu <ArrowDown />
              </button>

              {showNaveCat && (
                <div className="position-absolute start-0 z-3 p-3 mega-menu-container bg-white shadow shadow-3 rounded-3" style={{
                  top: "100%",
                  width: "98vw",
                  transform: "translateX(-50%)",
                }}>
                  <CategorySection />
                </div>
              )}
            </div>
          ) : <HoverComponent
            key={index}
            item={item}
            index={index}
            setHoverIndex={setHoverIndex}
            hoverIndex={hoverIndex}
          />
        }
        )}


      </div>

      <div className='rigth-content d-flex align-items-center'>
        <Headset />
        <div>
          <p className="mb-0 fs-2 py-0 text-success text-nowrap">1900 - 888</p>
          <p className="mb-0 text-nowrap">24/7 Support Center</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default ScondeNavebar
