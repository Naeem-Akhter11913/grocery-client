// import React from 'react';
// import './style.css'

// const ProductInfo = () => {
//     return (
//         <div className="">
//             <div className="p-4 shadow-sm">
//                 <span className="badge bg-light text-danger fw-bold mb-2" >Sale Off</span>

//                 <h2 className="fw-bold">Seeds of Change <br />Organic Quinoa, Brown</h2>

//                 <div className="d-flex align-items-center mb-2">
//                     star
//                     <small>(32 reviews)</small>
//                 </div>

//                 <div className="d-flex align-items-baseline mb-3">
//                     <h2 className="text-success fw-bold me-3">$38</h2>
//                     <small className="text-warning fw-bold me-2">26% Off</small>
//                     <del className="text-muted">$52</del>
//                 </div>

//                 <p className="text-muted">
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.
//                 </p>

//                 <div className="mb-3">
//                     <strong>Size / Weight: </strong>
//                     <div className="btn-group ms-2" role="group">
//                         <button className="btn btn-outline-secondary btn-sm border-0">50g</button>
//                         <button className="btn btn-success btn-sm border-0">60g</button>
//                         <button className="btn btn-outline-secondary btn-sm border-0">80g</button>
//                         <button className="btn btn-outline-secondary btn-sm border-0">100g</button>
//                         <button className="btn btn-outline-secondary btn-sm border-0">150g</button>
//                     </div>
//                 </div>

//                 <div className="d-flex align-items-center mb-4">
//                     <div className="input-group me-3 border border-success rounded" style={{ width: '100px', height:'40px'}}>
//                         <input type="text" className="form-control text-center  border-0" value="2" readOnly style={{height:'40px'}}/>
//                         <div className='d-flex flex-column'>
//                             <button className="btn py-0">+</button>
//                             <button className="btn py-0">-</button>
//                         </div>
//                     </div>
//                     <button className="btn btn-success px-4">🛒 Add to cart</button>
//                     <button className="btn btn-outline-secondary mx-2">
//                         {/* <FaRegHeart /> */}
//                         heart
//                     </button>
//                     <button className="btn btn-outline-secondary">
//                         {/* <FaShareAlt /> */}
//                         share
//                     </button>
//                 </div>

//                 <div className="row text-muted small">
//                     <div className="col-md-6 mb-2"><strong>Type:</strong> <span className="text-success">Organic</span></div>
//                     <div className="col-md-6 mb-2"><strong>MFG:</strong> Jun 4.2022</div>
//                     <div className="col-md-6 mb-2"><strong>LIFE:</strong> 70 days</div>
//                     <div className="col-md-6 mb-2"><strong>SKU:</strong> FWM15VKT</div>
//                     <div className="col-md-6 mb-2"><strong>Tags:</strong> Snack, Organic, Brown</div>
//                     <div className="col-md-6 mb-2 text-success"><strong>Stock:</strong> 8 Items In Stock</div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default ProductInfo
import React from 'react';
import './style.css';

const ProductInfo = () => {
  return (
    <div className="product-info">
      <div className="product-card">
        <span className="badge-sale">Sale Off</span>

        <h2 className="product-title">
          Seeds of Change <br /> Organic Quinoa, Brown
        </h2>

        <div className="rating">
          ⭐⭐⭐⭐⭐
          <small>(32 reviews)</small>
        </div>

        <div className="price-section">
          <h2 className="price">$38</h2>
          <small className="discount">26% Off</small>
          <del className="old-price">$52</del>
        </div>

        <p className="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem
          officia, corrupti reiciendis minima nisi modi, quasi, odio minus
          dolore impedit fuga eum eligendi.
        </p>

        <div className="size-weight">
          <strong>Size / Weight: </strong>
          <div className="size-options">
            <button className="btn-option">50g</button>
            <button className="btn-option active">60g</button>
            <button className="btn-option">80g</button>
            <button className="btn-option">100g</button>
            <button className="btn-option">150g</button>
          </div>
        </div>

        <div className="actions">
          <div className="quantity-box">
            <input type="text" value="2" readOnly />
            <div className="quantity-buttons">
              <button>+</button>
              <button>-</button>
            </div>
          </div>
          <button className="btn-add">🛒 Add to cart</button>
          <button className="btn-secondary">♡</button>
          <button className="btn-secondary">⇪</button>
        </div>

        <div className="product-details">
          <div><strong>Type:</strong> <span className="text-success">Organic</span></div>
          <div><strong>MFG:</strong> Jun 4.2022</div>
          <div><strong>LIFE:</strong> 70 days</div>
          <div><strong>SKU:</strong> FWM15VKT</div>
          <div><strong>Tags:</strong> Snack, Organic, Brown</div>
          <div className="text-success"><strong>Stock:</strong> 8 Items In Stock</div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
