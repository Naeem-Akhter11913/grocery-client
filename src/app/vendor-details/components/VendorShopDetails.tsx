'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaStar, FaTwitter, FaFacebook, FaInstagram, FaPinterest, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const VendorShopDetails = ({ isInPage = true }: { isInPage?: boolean }) => {
  const route = useRouter();
  return (
    <div className="card shadow-sm border-0 p-3 rounded-4" style={{ backgroundColor: "#cdeef5" }}>
      <div className="text-center">
        <img
          src="/vendor/vendor-16.png"
          alt="NestFood Logo"
          style={{ width: "100px" }}
        />
      </div>

      <div className="mt-3 text-center">
        <small className="text-muted">Since 2012</small>
        <h5 className="fw-bold mb-1">Nest Food.,Ltd</h5>
        <div className="d-flex justify-content-center align-items-center">
          <FaStar className="text-warning me-1" />
          <span className="fw-semibold">4.0</span>
        </div>
      </div>

      <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>
        Got a smooth, buttery spread in your fridge? Chances are good that it’s Good Chef.
        This brand made Lionto's list of the most popular grocery brands across the country.
      </p>

      <h6 className="fw-bold mt-3">Follow Us</h6>
      <div className="d-flex gap-2 mb-3">
        <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle">
          <FaTwitter />
        </a>
        <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle">
          <FaFacebook />
        </a>
        <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle">
          <FaInstagram />
        </a>
        <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle">
          <FaPinterest />
        </a>
      </div>

      {/* Address */}
      <div className="d-flex align-items-start mb-2">
        <FaMapMarkerAlt className="text-success me-2 mt-1" />
        <small>
          5171 W Campbell Ave undefined, Utah 53127 United States
        </small>
      </div>

      {/* Phone */}
      <div className="d-flex align-items-center mb-3">
        <FaPhoneAlt className="text-success me-2" />
        <small>(+91) - 540-025-124553</small>
      </div>

      {/* Button */}
      {isInPage && <button className="btn btn-success w-100 rounded-pill" onClick={() => {
        route.push('/contact-store/id-will-be-add-soon')
      }}>Contact Seller</button>}
    </div>
  )
}

export default VendorShopDetails