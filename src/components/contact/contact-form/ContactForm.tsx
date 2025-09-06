import React from 'react'
import './style.css'

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-row">
        <div className="contact-form">
          <p className="form-subtitle">Contact form</p>
          <h2 className="form-title">Drop Us a Line</h2>
          <p className="form-desc">
            Your email address will not be published. Required fields are marked *
          </p>

          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Your Phone" />
              <input type="text" placeholder="Subject" />
            </div>

            <textarea placeholder="Message" rows={6}></textarea>

            <button type="submit" className="btn-submit">
              Send message
            </button>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="contact-image">
          <img src="/contact/about-9.png" alt="Contact" />
        </div>
      </div>
    </div>
  )
}

export default ContactForm
