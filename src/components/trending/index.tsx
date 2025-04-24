import React from 'react'
import './style.css'
import { CartIcon } from '@/utils/Arrows'
import { topSelling, trendingProducts, recentlyAdded, topRated } from './json'


const TrendingProducts = () => {
  return (
    <div className='d-flex gap-3 mx-3'>

      <div>
        <div className="top-selling-wrapper">
          <h2 className="top-selling-title">Top Selling</h2>
          <div className="top-selling-underline-container">
            <div className="green-underline"></div>
            <div className="grey-line"></div>
          </div>
        </div>
        <div>
          {topSelling.map((item, index) => (
            <div className='top-sub-container' key={index}>
              <div className='img-container'>
                <img src={`${item.image}`} alt="" />
              </div>
              <div>
                <div className="rounded-3">
                  <h5 className="card-title"><a href="#" className='text-decoration text-decoration-none fs-6'>{item.title}</a></h5>

                  <div className="mb-2">
                    <span className="text-warning">{'★'.repeat(item.rating)}</span>
                    <span className="text-muted ms-1">({item.rating})</span>
                  </div>
                  <h5 className="text-success mb-3 d-flex align-items-center justify-content-between gap-3 fs-6">
                    {item.price}$
                    <small className="text-muted text-decoration-line-through">
                      ${item.oldPrice}
                    </small>
                  </h5>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      <div>
        <div className="top-selling-wrapper">
          <h2 className="top-selling-title">Top Selling</h2>
          <div className="top-selling-underline-container">
            <div className="green-underline"></div>
            <div className="grey-line"></div>
          </div>
        </div>
        <div>
          {trendingProducts.map((item, index) => (
            <div className='top-sub-container' key={index}>
              <div className='img-container'>
                <img src={`${item.image}`} alt="" />
              </div>
              <div>
                <div className="rounded-3">
                  <h5 className="card-title"><a href="#" className='text-decoration text-decoration-none fs-6'>{item.title}</a></h5>

                  <div className="mb-2">
                    <span className="text-warning">{'★'.repeat(item.rating)}</span>
                    <span className="text-muted ms-1">({item.rating})</span>
                  </div>
                  <h5 className="text-success mb-3 d-flex align-items-center justify-content-between gap-3 fs-6">
                    {item.price}$
                    <small className="text-muted text-decoration-line-through">
                      ${item.oldPrice}
                    </small>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="top-selling-wrapper">
          <h2 className="top-selling-title">Top Selling</h2>
          <div className="top-selling-underline-container">
            <div className="green-underline"></div>
            <div className="grey-line"></div>
          </div>
        </div>
        <div>
          {recentlyAdded.map((item, index) => (
            <div className='top-sub-container' key={index}>
              <div className='img-container'>
                <img src={`${item.image}`} alt="" />
              </div>
              <div>
                <div className="rounded-3">
                  <h5 className="card-title"><a href="#" className='text-decoration text-decoration-none fs-6'>{item.title}</a></h5>

                  <div className="mb-2">
                    <span className="text-warning">{'★'.repeat(item.rating)}</span>
                    <span className="text-muted ms-1">({item.rating})</span>
                  </div>
                  <h5 className="text-success mb-3 d-flex align-items-center justify-content-between gap-3 fs-6">
                    {item.price}$
                    <small className="text-muted text-decoration-line-through">
                      ${item.oldPrice}
                    </small>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="top-selling-wrapper">
          <h2 className="top-selling-title">Top Selling</h2>
          <div className="top-selling-underline-container">
            <div className="green-underline"></div>
            <div className="grey-line"></div>
          </div>
        </div>
        <div>
          {topRated.map((item, index) => (
            <div className='top-sub-container' key={index}>
              <div className='img-container'>
                <img src={`${item.image}`} alt="" />
              </div>
              <div>
                <div className="rounded-3">
                  <h5 className="card-title"><a href="#" className='text-decoration text-decoration-none fs-6'>{item.title}</a></h5>

                  <div className="mb-2">
                    <span className="text-warning">{'★'.repeat(item.rating)}</span>
                    <span className="text-muted ms-1">({item.rating})</span>
                  </div>
                  <h5 className="text-success mb-3 d-flex align-items-center justify-content-between gap-3 fs-6">
                    {item.price}$
                    <small className="text-muted text-decoration-line-through">
                      ${item.oldPrice}
                    </small>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default TrendingProducts