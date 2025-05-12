import Image from 'next/image';
import React from 'react';

const stats = [
  { number: '0+', label: 'Glorious years' },
  { number: '3+', label: 'Happy clients' },
  { number: '5+', label: 'Projects complete' },
  { number: '1+', label: 'Team advisor' },
  { number: '1+', label: 'Products Sale' },
];

const StatsSection = () => {
  return (
    <section className="position-relative my-5 rounded overflow-hidden">
      {/* Background Image */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <Image
          src="/about-us/about-9.png" // replace with your image path
          alt="Team working"
          layout="fill"
          objectFit="cover"
          quality={80}
        />
        {/* Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }} />
      </div>

      {/* Stats Content */}
      <div className="position-relative py-5">
        <div className="row text-center justify-content-center">
          {stats.map((stat, index) => (
            <div className="col-6 col-md-2 mb-4 mb-md-0" key={index}>
              <h2 className="fw-bold mb-1">{stat.number}</h2>
              <p className="mb-0 fw-medium text-dark">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
