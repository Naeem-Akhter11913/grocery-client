import React from "react";
import Image from "next/image";

const SetNewPassword = () => {
  return (
    <section className="container py-5" style={{ maxWidth: "650px" }}>
      <div className="mb-4">
        <Image src="/auth/reset_password.svg" width={60} height={60} alt="reset-icon" />
      </div>

      <h2 className="fw-bold">Set new password</h2>
      <p className="text-muted mb-4">
        Please create a new password that you don’t use on any other site.
      </p>

      <div className="row g-4">
        {/* Left: Inputs */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <input
                type="password"
                className="form-control py-2"
                placeholder="Password *"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control py-2"
                placeholder="Confirm your password *"
                required
              />
            </div>
            <button type="submit" className="btn btn-dark w-100 py-2 fw-semibold">
              Reset password
            </button>
          </form>
        </div>

        {/* Right: Password criteria */}
        <div className="col-md-6">
          <h6 className="fw-bold">Password must:</h6>
          <ul className="text-muted small ps-3">
            <li>Be between 9 and 64 characters</li>
            <li>Include at least two of the following:</li>
            <ul>
              <li>An uppercase character</li>
              <li>A lowercase character</li>
              <li>A number</li>
              <li>A special character</li>
            </ul>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SetNewPassword;
