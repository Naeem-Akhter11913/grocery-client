import Link from 'next/link';
import React from 'react';

import { FaFacebookF, FaGoogle, FaApple } from 'react-icons/fa';

const Registration = () => {
  return (
    <div className="py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="row p-4 rounded bg-white">
            {/* Left side - Form */}
            <div className="col-md-7">
              <h2 className="fw-bold">Create an Account</h2>
              <p>
                Already have an account? <Link href="/login" className="text-success">Login</Link>
              </p>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" placeholder="Confirm password" />
                </div>

                {/* Captcha row */}
                <div className="mb-3 d-flex">
                  <input type="text" className="form-control me-2" placeholder="Security code *" />
                  <div className="bg-success-subtle text-center px-3 d-flex align-items-center rounded">
                    <span className="text-success fw-bold fs-5 me-1">8</span>
                    <span className="text-danger fw-bold fs-5 me-1">6</span>
                    <span className="text-primary fw-bold fs-5 me-1">7</span>
                    <span className="text-muted fw-bold fs-5">5</span>
                  </div>
                </div>

                {/* Role selection */}
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="role" id="customer" />
                    <label className="form-check-label" htmlFor="customer">I am a customer</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="role" id="vendor" defaultChecked />
                    <label className="form-check-label" htmlFor="vendor">I am a vendor</label>
                  </div>
                </div>

                {/* Terms checkbox */}
                <div className="mb-3 d-flex justify-content-between">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="terms" />
                    <label className="form-check-label" htmlFor="terms">
                      I agree to terms & Policy.
                    </label>
                  </div>
                  <a href="#" className="text-muted small">Learn more</a>
                </div>

                <button type="submit" className="btn btn-success w-100">Submit & Register</button>

                {/* Note */}
                <p className="text-muted mt-3 small">
                  <strong>Note:</strong> Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and for other purposes
                  described in our privacy policy.
                </p>
              </form>
            </div>

            {/* Right side - Social Auth */}
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              <div className="w-100 p-3 border rounded">
                <button className="btn btn-primary w-100 mb-2 d-flex align-items-center justify-content-center gap-2">
                  <FaFacebookF /> Continue with Facebook
                </button>
                <button className="btn btn-light border w-100 mb-2 d-flex align-items-center justify-content-center gap-2">
                  <FaGoogle color="#DB4437" /> Continue with Google
                </button>
                <button className="btn btn-dark w-100 d-flex align-items-center justify-content-center gap-2">
                  <FaApple /> Continue with Apple
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration