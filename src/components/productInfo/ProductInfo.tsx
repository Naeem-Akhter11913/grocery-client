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
