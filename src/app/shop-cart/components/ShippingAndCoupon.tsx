'use clinet'
import React from 'react'

const ShippingAndCoupon = () => {
  return (
    <div className="my-4">
      <div className="row g-4">
        {/* Calculate Shipping */}
        <div className="col-md-6">
          <div className="card shadow-sm rounded-4">
            <div className="card-body">
              <h5 className="fw-bold">Calculate Shipping</h5>
              <p className="text-muted mb-3">
                Flat rate: <span className="text-success fw-bold">5%</span>
              </p>

              {/* Country Dropdown */}
              <select className="form-select mb-3">
                <option>United Kingdom</option>
                <option>United States</option>
                <option>India</option>
                <option>Australia</option>
              </select>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State / Country"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="PostCode / ZIP"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Coupon */}
        <div className="col-md-6">
          <div className="card shadow-sm rounded-4">
            <div className="card-body">
              <h5 className="fw-bold">Apply Coupon</h5>
              <p className="text-muted mb-3">Using A Promo Code?</p>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Enter Your Coupon"
                />
                <button className="btn btn-success fw-bold d-flex align-items-center">
                  <i className="bi bi-bag me-1"></i> Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingAndCoupon;