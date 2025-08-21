'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import './style.css';
import { ArrowDown } from '@/utils/Arrows';
import Link from 'next/link';
import CategoriesDropdown from './CategoriesDropdown';
import { FiSearch } from 'react-icons/fi';
import CartHover from './components/CartHover';
import dynamic from 'next/dynamic';
const Drawer = dynamic(() => import('../drawer/Drawer'), { ssr: false });

const Header: React.FC<{}> = () => {
  const [searchText, setSearchText] = useState('');
  const [isShow, setiIsShow] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);

  const handleClicked = () => {
    setiIsShow(!isShow);
  };

  useEffect(() => {
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 60) {
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
    <div className={` bg-white ${isInView ? 'main-nav-fix' : ''}`}>
      <header className="d-flex justify-content-between align-items-center py-2 px-2">

        {/* Logo */}
        <div className="d-flex align-items-center dfsdfs">
          <Link href={'/'}>
            <Image src="/navebar/logo.svg" alt="Nest Logo" width={130} height={40} />
          </Link>
        </div>


        {/* Search Bar */}
        <div className="mx-4 border border-green-300 rounded-md overflow-hidden position-relative custom-search-width">
          <div
            className="px-4 py-2 bg-white text-sm fw-semibold text-secondary d-flex align-items-center cursor-pointer left-search"
            onClick={handleClicked}
          >
            <p className='text-center'>All Categories</p>
            <span className="ms-2">
              <ArrowDown />
            </span>
          </div>
          <input
            type="text"
            placeholder="Search for items..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-grow-1 px-4 py-2 remove-input-border"
            id='search-imput'
            name='search'
          />

          <div className="d-flex align-items-center px-4 text-secondary cursor-pointer position-absolute end-0 top-50 translate-middle-y">
            <FiSearch style={{ fontSize: 20 }} />
          </div>
        </div>


        <div className='drawer'>
          <Drawer />
        </div>

        {/* Icons */}
        <div className="icons-container">
          {/* Compare */}

          <div className="position-relative text-center recycle-container">
            <Link href="/shop-compare" className="text-decoration-none">
              <Image src="/navebar/icon-compare.svg" alt="Compare" width={24} height={24} />
              <span className="badge-count position-absolute top-0 start-100 translate-middle">
                3
              </span>
              <span className="small-text mt-1 header-font-size">Compare</span>
            </Link>
          </div>

          {/* Wishlist */}
          <div className="position-relative text-center">
            <Link href="/shop-wishlist" className="text-decoration-none">
              <Image src="/navebar/icon-heart.svg" alt="Wishlist" width={24} height={24} />
              <span className="badge-count position-absolute top-0 start-100 translate-middle">
                3
              </span>
              <span className="small-text mt-1 header-font-size">Wishlist</span>
            </Link>
          </div>

          {/* Cart */}
          <div
            className="position-relative text-center"
            onMouseEnter={() => setShowCart(true)}
            onMouseLeave={() => setShowCart(false)}
          >
            <Link href="/shop-cart" className="text-decoration-none">
              <Image src="/navebar/icon-cart.svg" alt="Cart" width={24} height={24} />
              <span className="badge-count position-absolute top-0 start-100 translate-middle">
                2
              </span>
              <span className="small-text mt-1 header-font-size">Cart</span>
            </Link>

            {/* CartHover should render only once here */}
            {showCart && (
              <div className="cart-hover-container position-absolute end-0 mt-2 z-3 bg-white">
                <CartHover />
              </div>
            )}

          </div>

          {/* Account */}

          <Link href={'/dashboard'} className="text-center text-decoration-none dashboard-container">
            <Image src="/navebar/icon-user.svg" alt="Account" width={24} height={24} />
            <span className="small-text mt-1 header-font-size">Account</span>
          </Link>
        </div>
      </header>

      <CategoriesDropdown isShow={isShow} />
    </div>
  );
};

export default Header;
