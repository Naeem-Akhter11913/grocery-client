'use client';
import Image from 'next/image';
import { useState } from 'react';
import './style.css';
import { ArrowDown } from '@/utils/Arrows';
import Link from 'next/link';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <header className="d-flex justify-content-between align-items-center py-2 px-2">
      {/* Logo */}
      <div className="d-flex align-items-center">
        <Link href={'/'}>
          <Image src="/navebar/logo.svg" alt="Nest Logo" width={130} height={40} />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="d-flex justify-content-between mx-4 border border-green-300 rounded-md overflow-hidden position-relative custom-search-width">
        <div className="px-4 py-2 bg-white text-sm fw-semibold text-secondary d-flex align-items-center cursor-pointer">
          All Categories
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
        />
        <div className="d-flex align-items-center px-4 text-secondary cursor-pointer position-absolute end-0 top-50 translate-middle-y">
          <Image src="/navebar/search.png" alt="Search" width={37} height={20} />
        </div>
      </div>

      {/* Icons */}
      <div className="d-flex align-items-center gap-3">
        {[
          { icon: '/navebar/icon-compare.svg', label: 'Compare', count: 3 },
          { icon: '/navebar/icon-heart.svg', label: 'Wishlist', count: 3 },
          { icon: '/navebar/icon-cart.svg', label: 'Cart', count: 2 },
        ].map((item, index) => (
          <div key={item.label} className="position-relative text-center">
            <Image src={item.icon} alt={item.label} width={24} height={24} />
            <span className={`badge-count position-absolute top-0 start-100 translate-middle-${index}`}>
              {item.count}
            </span>
            <span className="small-text mt-1 header-font-size">{item.label}</span>
          </div>
        ))}

        {/* Account */}
        <Link href={'/dashboard'} className="text-center text-decoration-none">
          <Image src="/navebar/icon-user.svg" alt="Account" width={24} height={24} />
          <span className="small-text mt-1 header-font-size">Account</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
