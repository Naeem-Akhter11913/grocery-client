import React from 'react'
import './style.css';

const HelpPage = () => {
    return (
        <section className="container py-5">
            <div className="row gy-4">
                <div className="col-md-6 col-lg-4 ">
                    <p className="text-success fw-semibold fs-5">How can help you ?</p>
                    <h2 className="fw-bold display-5 mb-4">
                        Let us know how <br />
                        we can help you
                    </h2>
                    <p className="text-secondary mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br />
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
                <div className="col-md-8 col-lg-8">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <h5 className="fw-bold">
                                01. <span className="text-dark">Visit Feedback</span>
                            </h5>
                            <p className="text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <h5 className="fw-bold">
                                02. <span className="text-dark">Employer Services</span>
                            </h5>
                            <p className="text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <h5 className="fw-bold text-success">
                                03. <span className="text-success">Billing Inquiries</span>
                            </h5>
                            <p className="text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <h5 className="fw-bold">
                                04. <span className="text-dark">General Inquiries</span>
                            </h5>
                            <p className="text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HelpPage