import React from 'react'
import './style.css'
import { Facebook, Instagram, Pinterest, Twitter, Youtube } from '@/utils/Arrows'


const Footer = () => {
  return (
    <footer className="py-2 border">
      <div className="px-5">
        <div className="row">

          <div className="col-md-3">
            <img src="/navebar/logo.svg" alt="Nest Logo" width="120" />
            <p className="mt-3">Awesome grocery store website template</p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt text-success me-2"></i>
                <strong>Address:</strong> 5171 W Campbell Ave, undefined Kent, Utah 53127 United States
              </li>
              <li className="mb-2">
                <i className="fas fa-phone text-success me-2"></i>
                <strong>Call Us:</strong> (+91) - 540-025-124553
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope text-success me-2"></i>
                <strong>Email:</strong> sale@Nest.com
              </li>
              <li>
                <i className="fas fa-clock text-success me-2"></i>
                <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
              </li>
            </ul>
            <h6>Install App</h6>
            <p>From App Store or Google Play</p>
            <div className='d-flex gap-2'>
              <img src="/secondNavebar/app-store.jpg" alt="app-store" height={40} />
              <img src="/secondNavebar/google-play.jpg" alt="playstore" height={40} />
            </div>
            <p className="mt-3">Secured Payment Gateways</p>
            <img src="/secondNavebar/payment-method.png" alt="payment" height={40} />
          </div>

          <div className="col-md-2">
            <h5 className="fw-bold">Company</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Support Center</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5 className="fw-bold">Account</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li><a href="#">Sign In</a></li>
              <li><a href="#">View Cart</a></li>
              <li><a href="#">My Wishlist</a></li>
              <li><a href="#">Track My Order</a></li>
              <li><a href="#">Help Ticket</a></li>
              <li><a href="#">Shipping Details</a></li>
              <li><a href="#">Compare products</a></li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5 className="fw-bold">Corporate</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li><a href="#">Become a Vendor</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Farm Business</a></li>
              <li><a href="#">Farm Careers</a></li>
              <li><a href="#">Our Suppliers</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Promotions</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="fw-bold">Popular</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li><a href="#">Milk & Flavoured Milk</a></li>
              <li><a href="#">Butter and Margarine</a></li>
              <li><a href="#">Eggs Substitutes</a></li>
              <li><a href="#">Marmalades</a></li>
              <li><a href="#">Sour Cream and Dips</a></li>
              <li><a href="#">Tea & Kombucha</a></li>
              <li><a href="#">Cheese</a></li>
            </ul>
          </div>

          <hr className='mt-4' />

          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <p className='mb-0'>© 2022, Nest - HTML Ecommerce Template</p>
              <p className='mb-0'>All rights reserved</p>
            </div>
            <div className='d-flex gap-3'>
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
        </div>
      </div>
    </footer>
  )
}

export default Footer