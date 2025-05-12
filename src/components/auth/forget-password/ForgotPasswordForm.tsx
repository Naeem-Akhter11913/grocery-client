import React from "react";
import Image from "next/image";

const ForgotPasswordForm = () => {
  return (
    <section className="container py-5" style={{ maxWidth: "500px" }}>
      <div className="mb-4">
        <Image src="/auth/forgot_password.svg" width={60} height={60} alt="lock" />
      </div>

      <h2 className="fw-bold ">Forgot your password?</h2>
      <p className="text-muted ">
        Not to worry, we got you! Let’s get you a new password. Please enter your email address or your Username.
      </p>

      <form className="mt-4">
        {/* Email or Username */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control py-2"
            placeholder="Username or Email *"
            required
          />
        </div>

        {/* Security Code */}
        <div className="row g-2 align-items-center mb-3">
          <div className="col-7">
            <input
              type="text"
              className="form-control py-2"
              placeholder="Security code *"
              required
            />
          </div>
          <div className="col-5">
            <div
              className="bg-success bg-opacity-25 rounded d-flex justify-content-center align-items-center py-2"
              style={{ fontSize: "1.3rem", fontWeight: "600", color: "#333" }}
            >
              <span style={{ color: "green" }}>8</span>
              <span style={{ color: "purple" }} className="mx-1">6</span>
              <span style={{ color: "red" }}>7</span>
              <span style={{ color: "orange" }} className="ms-1">5</span>
            </div>
          </div>
        </div>

        {/* Checkbox */}
        <div className="form-check mb-4 d-flex align-items-center">
          <input className="form-check-input" type="checkbox" id="terms" />
          <label className="form-check-label ms-2" htmlFor="terms">
            I agree to terms &amp; Policy. <a href="#" className="text-muted ms-2">Learn more</a>
          </label>
        </div>

        {/* Reset Button */}
        <button type="submit" className="btn btn-dark w-100 py-2 fw-semibold">
          Reset password
        </button>
      </form>
    </section>
  );
};

export default ForgotPasswordForm;
