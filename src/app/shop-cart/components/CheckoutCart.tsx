import React from 'react'

const Checkout = () => {
  return (
    <div className="card shadow-sm rounded-4 p-4 px-3">
      <div className="card-body p-0 border">
        <div className="d-flex justify-content-between mb-2 px-1 align-items-center">
          <span className="text-muted mt-3">Subtotal</span>
          <span className="fw-bold text-success mt-3">$12.31</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between mb-2 px-1 align-items-center">
          <span className="text-muted">Shipping</span>
          <span className="fw-bold">Free</span>
        </div>
        <div className="d-flex justify-content-between mb-2 px-1 align-items-center">
          <span className="text-muted">Estimate for</span>
          <span className="fw-bold">United Kingdom</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between mb-3 px-1 align-items-center">
          <span className="text-muted fw-bold">Total</span>
          <span className="fw-bold text-success">$12.31</span>
        </div>
        <button className="btn btn-success w-100 fw-bold rounded-3">
          Proceed To CheckOut <span className="ms-2">↔</span>
        </button>
      </div>
    </div>
  )
}

export default Checkout