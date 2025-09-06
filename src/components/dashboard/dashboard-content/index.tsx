import React from 'react'

const DashboadContent = () => {
  return (
    <div className="container my-5">
    <h2 className="fw-bold mb-3">Hello Rosie!</h2>
    <p className="text-secondary fs-5">
      From your account dashboard, you can easily check &amp; view your{" "}
      <a href="#" className="text-success text-decoration-none">
        recent orders
      </a>
      , manage your{" "}
      <a href="#" className="text-success text-decoration-none">
        shipping and billing addresses
      </a>{" "}
      and{" "}
      <a href="#" className="text-success text-decoration-none">
        edit your password and account details
      </a>
      .
    </p>
  </div>
  )
}

export default DashboadContent