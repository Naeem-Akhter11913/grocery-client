// import React from "react";
// import "./style.css";
// import { RightArrow } from "@/utils/Arrows";

// const FeatureCart = () => {
//   return (
//     <div className="mx-3 mt-3">
//       <div className="row g-3 feature-cart">
//         {/* Card 1 */}
//         <div className="col-md-4 col-sm-6 col-12">
//           <div className="feature-card">
//             <img
//               src="/feature-category/banner-1.png"
//               alt="Fresh Products"
//               className="img-fluid feature-img"
//             />
//             <div className="feature-text">
//               <h3>
//                 Everyday Fresh & <br />
//                 Clean with Our Products
//               </h3>
//               <button type="button">
//                 Shop Now <span><RightArrow /></span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="col-md-4 col-sm-6 col-12">
//           <div className="feature-card">
//             <img
//               src="/feature-category/banner-2.png"
//               alt="Healthy Breakfast"
//               className="img-fluid feature-img"
//             />
//             <div className="feature-text">
//               <h3>
//                 Make your Breakfast <br />
//                 Healthy and Easy
//               </h3>
//               <button type="button">
//                 Shop Now <span><RightArrow /></span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="col-md-4 col-sm-12 col-12">
//           <div className="feature-card">
//             <img
//               src="/feature-category/banner-3.png"
//               alt="Organic Products"
//               className="img-fluid feature-img"
//             />
//             <div className="feature-text">
//               <h3>
//                 The best Organic <br />
//                 Products Online
//               </h3>
//               <button type="button">
//                 Shop Now <span><RightArrow /></span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureCart;


import React from "react";
import "./style.css";
import { RightArrow } from "@/utils/Arrows";

const FeatureCart = () => {
  return (
    <div className="feature-cart">
      {/* Card 1 */}
      <div className="feature-card">
        <img
          src="/feature-category/banner-1.png"
          alt="Fresh Products"
          className="feature-img"
        />
        <div className="feature-text">
          <h3>
            Everyday Fresh & <br />
            Clean with Our Products
          </h3>
          <button type="button">
            Shop Now <span><RightArrow /></span>
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="feature-card">
        <img
          src="/feature-category/banner-2.png"
          alt="Healthy Breakfast"
          className="feature-img"
        />
        <div className="feature-text">
          <h3>
            Make your Breakfast <br />
            Healthy and Easy
          </h3>
          <button type="button">
            Shop Now <span><RightArrow /></span>
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="feature-card feature-last-card">
        <img
          src="/feature-category/banner-3.png"
          alt="Organic Products"
          className="feature-img"
        />
        <div className="feature-text">
          <h3>
            The best Organic <br />
            Products Online
          </h3>
          <button type="button">
            Shop Now <span><RightArrow /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCart;
