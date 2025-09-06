import React from 'react'
import './style.css';

const HelpPage = () => {
  return (
    <div className="help-container">
      {/* Left Section */}
      <div className="help-left">
        <p className="help-subtitle">How can help you ?</p>
        <h2 className="help-title">
          Let us know how <br />
          we can help you
        </h2>
        <p className="help-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Right Section */}
      <div className="help-right">
        <div className="help-card">
          <h5>
            01. <span>Visit Feedback</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="help-card">
          <h5>
            02. <span>Employer Services</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="help-card highlight">
          <h5>
            03. <span>Billing Inquiries</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="help-card">
          <h5>
            04. <span>General Inquiries</span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HelpPage
