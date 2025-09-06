import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

const stats = [
  { number: 120, label: 'Glorious years' },
  { number: 54, label: 'Happy clients' },
  { number: 230, label: 'Projects complete' },
  { number: 450, label: 'Team advisor' },
  { number: 345, label: 'Products Sale' },
];

const StatsSection = () => {
  return (
    <section className="position-relative my-5 rounded overflow-hidden">
      {/* Background Image */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <Image
          src="/about-us/about-9.png"
          alt="Team working"
          layout="fill"
          objectFit="cover"
          quality={80}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }} />
      </div>

      <div className="position-relative py-5">
        <div className="row text-center justify-content-center">
          {stats.map((stat, index) => (
            <div className="col-6 col-md-2 mb-4 mb-md-0" key={index}>
              <p className="mb-0 fw-medium text-dark">{stat.label}</p>
              <CountUp key={index} start={0} end={stat.number} duration={7} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
