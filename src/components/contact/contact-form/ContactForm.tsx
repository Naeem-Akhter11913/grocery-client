import React from 'react'

const ContactForm = () => {
  return (
    <div className="container mt-5 my-5">
      <div className="row align-items-center">
        {/* Left Side Form */}
        <div className="col-md-7">
          <p className="text-success fw-bold">Contact form</p>
          <h2 className="fw-bold">Drop Us a Line</h2>
          <p className="text-muted">
            Your email address will not be published. Required fields are marked *
          </p>

          <form>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="First Name" required />
              </div>
              <div className="col">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="Your Phone" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
            </div>

            <div className="mb-3">
              <textarea className="form-control" placeholder="Message" rows={6}></textarea>
            </div>

            <button type="submit" className="btn btn-dark px-4 py-2">
              Send message
            </button>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="col-md-5 mt-4 mt-md-0">
          <div className="rounded overflow-hidden shadow-sm">
            <img
              src="contact/about-9.png"
              alt="Contact"
              className="img-fluid rounded"
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm