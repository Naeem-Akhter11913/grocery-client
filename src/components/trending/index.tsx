import React from 'react'
import './style.css'
import { topSelling, trendingProducts, recentlyAdded, topRated } from './json'
import GreyLine from '../greyLine'


const TrendingProducts = () => {
  return (
    <div className='trending-product-container px-3'>

      <div>
        <GreyLine title="Top Selling" />
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
        <GreyLine title="Trending Products" />
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
        <GreyLine title="Recently added" />
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
        <GreyLine title="Top Rated" />
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