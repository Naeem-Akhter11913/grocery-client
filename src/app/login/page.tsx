'use client'
import React from 'react'
import './style.css'
import Link from 'next/link'

const Login = () => {
  return (
    <div className=" d-flex align-items-center justify-content-center my-5">
        <div className="col-lg-4 d-none d-lg-block p-0">
          <img
            src="auth/login-1.png"
            alt="Login"
            className=" object-fit-cover"
          />
        </div>

        <div className="col-lg-6 p-5 bg-white">
          <h2 className="fw-bold mb-3">Login</h2>
          <p className="mb-4">
            Don't have an account? <Link href="/registration" className="text-success">Create here</Link>
          </p>

          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username or Email *"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Your password *"
                required
              />
            </div>

            <div className="mb-3 d-flex align-items-center">
              <input
                type="text"
                className="form-control me-3"
                placeholder="Security code *"
                required
              />
              <div className="bg-success-subtle p-2 rounded text-center">
                <span className="text-success fw-bold fs-5 me-1">8</span>
                <span className="text-danger fw-bold fs-5 me-1">6</span>
                <span className="text-primary fw-bold fs-5 me-1">7</span>
                <span className="text-warning fw-bold fs-5">5</span>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-muted">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-dark w-100 py-2">
              Log in
            </button>
          </form>
        </div>
    </div>
  )
}

export default Login