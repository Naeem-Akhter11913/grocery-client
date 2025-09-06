'use client'
import React from 'react'
import './style.css'
import { Facebook, Instagram, Pinterest, Twitter, Youtube } from '@/utils/Arrows'


const Footer = () => {
  return (
    <>
      <div className="row px-4 footer-container">
        <div className="col-md-3 col-sm-6 order-1 footer-sub-container">
          <img src="/navebar/logo.svg" alt="Nest Logo" width="120" />
          <ul className="list-unstyled">
            <li className="mb-2 d-flex">
              <img src="/footer/icon-clock.svg" alt="contact" height={20} className='me-2' />
              <strong>Address:</strong> 5171 W Campbell Ave, undefined Kent, Utah 53127 United States
            </li>
            <li className="mb-2 d-flex">
              <img src="/footer/icon-contact.svg" alt="contact" height={20} className='me-2' />
              <strong>Call Us:</strong> (+91) - 540-025-124553
            </li>
            <li className="mb-2 d-flex">
              <img src="/footer/icon-email-2.svg" alt="contact" height={20} className='me-2' />
              <strong>Email:</strong> sale@Nest.com
            </li>
            <li className='d-flex'>
              <img src="/footer/icon-location.svg" alt="contact" height={20} className='me-2' />
              <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
            </li>
          </ul>
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className='d-flex gap-2'>
            <img src="/secondNavebar/app-store.jpg" alt="app-store" height={40} />
            <img src="/secondNavebar/google-play.jpg" alt="playstore" height={40} />
          </div>
          <p className="mt-3">Secured Payment Gateways</p>
          <img src="/secondNavebar/payment-method.png" className='mb-3' alt="payment" height={40} />
        </div>

        <div className="col-md-2 col-sm-4 order-3 footer-sub-container">
          <h5 className="fw-bold">Company</h5>
          <ul className="list-unstyled d-flex flex-wrap  gap-3">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="col-md-2 col-sm-4 order-4 footer-sub-container">
          <h5 className="fw-bold">Account</h5>
          <ul className="list-unstyled d-flex flex-wrap gap-3">
            <li><a href="#">Sign In</a></li>
            <li><a href="#">View Cart</a></li>
            <li><a href="#">My Wishlist</a></li>
            <li><a href="#">Track My Order</a></li>
            <li><a href="#">Help Ticket</a></li>
            <li><a href="#">Shipping Details</a></li>
            <li><a href="#">Compare products</a></li>
          </ul>
        </div>

        <div className="col-md-2 col-sm-4 order-5 footer-sub-container">
          <h5 className="fw-bold">Corporate</h5>
          <ul className="list-unstyled d-flex flex-wrap gap-3 text-sm-start">
            <li><a href="#">Become a Vendor</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Farm Business</a></li>
            <li><a href="#">Farm Careers</a></li>
            <li><a href="#">Our Suppliers</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Promotions</a></li>
          </ul>
        </div>

        <div className="col-md-3 col-sm-6 order-2 footer-sub-container">
          <h5 className="fw-bold">Popular</h5>
          <ul className="list-unstyled">
            <li><a href="#">Milk & Flavoured Milk</a></li>
            <li><a href="#">Butter and Margarine</a></li>
            <li><a href="#">Eggs Substitutes</a></li>
            <li><a href="#">Marmalades</a></li>
            <li><a href="#">Sour Cream and Dips</a></li>
            <li><a href="#">Tea & Kombucha</a></li>
            <li><a href="#">Cheese</a></li>
          </ul>
        </div>

      </div>
      <hr className='mt-4' />

      <div className='footer-bottom'>
        <div className='d-flex flex-wrap'>
          <p className='mb-0 text-wrap'>© 2022, Nest - HTML Ecommerce Template</p>
          <p className='mb-0 text-wrap'>All rights reserved</p>
        </div>
        <div className='d-flex flex-wrap gap-3'>
          <div className='d-flex gap-2 justify-content-center align-items-center'>
            <img src="/secondNavebar/phone-call.svg" alt="phone-call" height={35} />
            <div>
              <p className='fs-3 mb-0'>1900 - 6666</p>
              <p className='mb-0'>Working 8:00 - 22:00</p>
            </div>
          </div>
          <div className='d-flex gap-2 justify-content-center align-items-center'>
            <img src="/secondNavebar/phone-call.svg" alt="phone-call" height={35} />
            <div>
              <p className='fs-3 mb-0'>1900 - 8888</p>
              <p className='mb-0'>24/7 Support Center</p>
            </div>
          </div>
        </div>
        <div>
          <div className='d-flex gap-2 m-0'>
            <h3>Follow Us</h3>
            <div className='social-icons'>
              <Facebook />
            </div>
            <div className='social-icons'>
              <Twitter />
            </div>
            <div className='social-icons'>
              <Instagram />
            </div>
            <div className='social-icons'>
              <Pinterest />
            </div>
            <div className='social-icons'>
              <Youtube />
            </div>
          </div>
          <p className='m-0'>Up to 15% discount on your first subscribe</p>
        </div>
      </div>
    </>
  )
}

export default Footer