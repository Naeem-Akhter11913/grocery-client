import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const teamMembers = [
  {
    name: "H. Merinda",
    title: "CEO & Co-Founder",
    image: "/about-us/about-9.png",
  },
  {
    name: "Dilan Specter",
    title: "Head Engineer",
    image: "/about-us/about-8.png",
  },
];

const TeamSection = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-lg-5 mb-4 mb-lg-0">
          <h6 className="text-success fw-bold">Our Team</h6>
          <h2 className="fw-bold display-6">Meet Our Expert Team</h2>
          <p className="text-muted">
            Proin ullamcorper pretium orci. Donec necscelerisque leo. Nam massa dolor imperdiet necon sequata congue idsem. Maecenas malesuada faucibus finibus.
          </p>
          <p className="text-muted">
            Proin ullamcorper pretium orci. Donec necscelerisque leo. Nam massa dolor imperdiet necon sequata congue idsem. Maecenas malesuada faucibus finibus.
          </p>
          <button className="btn btn-success fw-semibold px-4 py-2 mt-2">
            View All Members
          </button>
        </div>

        {/* Right Column */}
        <div className="col-lg-7">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="bg-white rounded shadow-sm overflow-hidden">
                  <div className="position-relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={600}
                      height={400}
                      className="img-fluid rounded-top"
                      style={{ objectFit: "cover", width: "100%", height: "300px" }}
                    />
                  </div>
                  <div className="text-center py-3 px-3">
                    <h5 className="fw-bold mb-1">{member.name}</h5>
                    <p className="text-muted mb-2">{member.title}</p>
                    <div className="d-flex justify-content-center gap-3 text-success fs-5">
                      <FaFacebookF />
                      <FaTwitter />
                      <FaInstagram />
                      <FaYoutube />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
