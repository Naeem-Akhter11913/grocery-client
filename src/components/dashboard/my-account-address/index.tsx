'use client'
import React , {useEffect, useRef} from 'react'

const MyAccount = () => {

  const formRef = useRef(null);
  
  return (
    <div className="container my-5">
      <h5 className="fw-bold mb-3">Account Details</h5>

      <p>
        Already have an account?{" "}
        <a href="#" className="text-success text-decoration-none fw-medium">
          Log in instead!
        </a>
      </p>

      <form ref={formRef}>
        {/* First & Last Name */}
        <div className="d-flex flex-column flex-md-row gap-3 mb-3">
          <div className="flex-fill">
            <label className="form-label">First Name *</label>
            <input type="text" className="form-control rounded-3" />
          </div>
          <div className="flex-fill">
            <label className="form-label">Last Name *</label>
            <input type="text" className="form-control rounded-3" />
          </div>
        </div>

        {/* Display Name */}
        <div className="mb-3">
          <label className="form-label">Display Name *</label>
          <input type="text" className="form-control rounded-3" />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email Address *</label>
          <input type="email" className="form-control rounded-3" />
        </div>

        {/* Current Password */}
        <div className="mb-3">
          <label className="form-label">Current Password *</label>
          <input type="password" className="form-control rounded-3" />
        </div>

        {/* New Password */}
        <div className="mb-3">
          <label className="form-label">New Password *</label>
          <input type="password" className="form-control rounded-3" />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="form-label">Confirm Password *</label>
          <input type="password" className="form-control rounded-3" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success px-4 py-2 rounded-2">
          Save Change
        </button>
      </form>
    </div>
  )
}

export default MyAccount