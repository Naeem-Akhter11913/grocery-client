import React from 'react'

const MyAddress = () => {
  return (
    <div className="">
      <div className="d-flex flex-column flex-md-row justify-content-around gap-1">
        {/* Billing Address */}
        <div>
          <h4 className="fw-bold mb-3">Billing Address</h4>
          <p className="text-muted mb-1">3522 Interstate</p>
          <p className="text-muted mb-1">75 Business Spur,</p>
          <p className="text-muted mb-1">Sault Ste.</p>
          <p className="text-muted mb-1">Marie, MI 49783</p>
          <p className="text-muted mb-1">New York</p>
          <a href="#" className="text-success text-decoration-none fw-normal">
            Edit
          </a>
        </div>

        {/* Shipping Address */}
        <div>
          <h4 className="fw-bold mb-3">Shipping Address</h4>
          <p className="text-muted mb-1">4299 Express Lane</p>
          <p className="text-muted mb-1">Sarasota,</p>
          <p className="text-muted mb-1">FL 34249 USA</p>
          <p className="text-muted mb-1">Phone: 1.941.227.4444</p>
          <p className="text-muted mb-1">Sarasota</p>
          <a href="#" className="text-success text-decoration-none fw-normal">
            Edit
          </a>
        </div>
      </div>
    </div>
  )
}

export default MyAddress