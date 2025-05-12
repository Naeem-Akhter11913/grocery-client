import React from 'react'
import './style.css';
import Image from 'next/image';


const OurPerformance = () => {
    return (
        <div className="container py-5">
            <div className="row align-items-center g-4">
                {/* Left Images */}
                <div className="col-md-4 d-flex flex-column gap-3">
                    <div className="rounded overflow-hidden">
                        <img
                            src="/about-us/about-5.png"
                            alt="Team working"
                            className="img-fluid rounded"
                        />
                    </div>

                </div>

                {/* Main Content */}
                <div className="col-md-8">
                    <p className="text-muted fw-bold">Our performance</p>
                    <h2 className="fw-bold mb-3">
                        Your Partner for e-commerce grocery solution
                    </h2>
                    <p className="text-secondary">
                        Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto.
                    </p>
                    <p className="text-secondary">
                        Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="row text-center mt-5">
                <div className="col-md-4 text-start">
                    <h5 className="fw-bold">Who we are</h5>
                    <p className="text-secondary">
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros
                        donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
                    </p>
                </div>
                <div className="col-md-4 text-start">
                    <h5 className="fw-bold">Our history</h5>
                    <p className="text-secondary">
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros
                        donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
                    </p>
                </div>
                <div className="col-md-4 text-start">
                    <h5 className="fw-bold">Our mission</h5>
                    <p className="text-secondary">
                        Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros
                        donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurPerformance