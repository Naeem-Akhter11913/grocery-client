import React from 'react'

const TrackOrder = () => {
  console.log('order track')
  return (
    <div className="container my-5">
        <h2 className="fw-bold mb-3">Orders tracking</h2>
        <p className="text-muted mb-4" style={{ maxWidth: '700px' }}>
          To track your order please enter your OrderID in the box below and press "Track" button. This was given to you on your receipt and in the confirmation email you should have received.
        </p>

        <form className="w-100" style={{ maxWidth: '600px' }}>
          <div className="mb-4">
            <label htmlFor="orderId" className="form-label fw-semibold">
              Order ID
            </label>
            <input
              type="text"
              id="orderId"
              className="form-control form-control-lg"
              placeholder="Found in your order confirmation email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="billingEmail" className="form-label fw-semibold">
              Billing email
            </label>
            <input
              type="email"
              id="billingEmail"
              className="form-control form-control-lg"
              placeholder="Email you used during checkout"
            />
          </div>

          <button
            type="submit"
            className="btn text-white px-5 py-3"
            style={{ backgroundColor: '#22313F', borderRadius: '12px' }}
          >
            Track
          </button>
        </form>
      </div>
  )
}

export default TrackOrder