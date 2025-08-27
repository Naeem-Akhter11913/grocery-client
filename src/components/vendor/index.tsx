// import React from 'react';
// import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
// import './style.css'

// const VendorDetails = () => {
//   return (
//     <div className="container my-5">
//       <div className="card p-4 border-0 shadow-sm">
//         <div className="d-flex align-items-center mb-3">
//           <img
//             src="/logo.png" // <-- replace with your actual logo path
//             alt="Company Logo"
//             style={{ width: "60px", height: "60px", objectFit: "contain" }}
//             className="me-3"
//           />
//           <div>
//             <h5 className="mb-0">Noodles Co.</h5>
//             <small className="text-success">(32 reviews)</small>
//           </div>
//         </div>

//         <div className="mb-3">
//           <p className="mb-1">
//             <FaMapMarkerAlt className="me-2 text-success" />
//             5171 W Campbell Ave undefined Kent, Utah 53127 United States
//           </p>
//           <p className="mb-0">
//             <FaPhoneAlt className="me-2 text-success" />
//             Contact Seller: (+91) - 540-025-553
//           </p>
//         </div>

//         <div className="row text-center my-4">
//           <div className="col">
//             <p className="text-muted mb-1">Rating</p>
//             <h5>92%</h5>
//           </div>
//           <div className="col">
//             <p className="text-muted mb-1">Ship on time</p>
//             <h5>100%</h5>
//           </div>
//           <div className="col">
//             <p className="text-muted mb-1">Chat response</p>
//             <h5>89%</h5>
//           </div>
//         </div>

//         <p className="text-muted">
//           Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017. In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C.
//         </p>
//       </div>
//     </div>
//   )
// }

// export default VendorDetails

import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './style.css';

const VendorDetails = () => {
  return (
    <div className="vendor-details">
      <div className="vendor-details__card">
        
        {/* Header with Logo + Company Name */}
        <div className="vendor-details__header">
          <img
            src="/logo.png" // <-- replace with your actual logo path
            alt="Company Logo"
            className="vendor-details__logo"
          />
          <div>
            <h5 className="vendor-details__title">Noodles Co.</h5>
            <small className="vendor-details__reviews">(32 reviews)</small>
          </div>
        </div>

        {/* Address + Phone */}
        <div className="vendor-details__info">
          <p className="vendor-details__info-item">
            <FaMapMarkerAlt className="vendor-details__icon" />
            5171 W Campbell Ave undefined Kent, Utah 53127 United States
          </p>
          <p className="vendor-details__info-item">
            <FaPhoneAlt className="vendor-details__icon" />
            Contact Seller: (+91) - 540-025-553
          </p>
        </div>

        {/* Stats */}
        <div className="vendor-details__stats">
          <div className="vendor-details__stat">
            <p className="vendor-details__stat-label">Rating</p>
            <h5 className="vendor-details__stat-value">92%</h5>
          </div>
          <div className="vendor-details__stat">
            <p className="vendor-details__stat-label">Ship on time</p>
            <h5 className="vendor-details__stat-value">100%</h5>
          </div>
          <div className="vendor-details__stat">
            <p className="vendor-details__stat-label">Chat response</p>
            <h5 className="vendor-details__stat-value">89%</h5>
          </div>
        </div>

        {/* Description */}
        <p className="vendor-details__description">
          Noodles & Company is an American fast-casual restaurant that offers international 
          and American noodle dishes and pasta in addition to soups and salads. Noodles & 
          Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, 
          Colorado. The company went public in 2013 and recorded a $457 million revenue in 
          2017. In late 2018, there were 460 Noodles & Company locations across 29 states 
          and Washington, D.C.
        </p>
      </div>
    </div>
  );
};

export default VendorDetails;
