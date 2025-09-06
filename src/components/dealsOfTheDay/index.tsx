'use client';
import React, { useEffect, useState } from 'react';
import './style.css';
import { CartIcon } from '@/utils/Arrows';

const DealsOfTheDay = () => {
  const targetDate = new Date("2025-09-30T00:00:00").getTime();
  const [date, setDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });





  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft < 0) {
        clearInterval(countdown);
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setDate({
        days,
        hours,
        minutes,
        seconds
      })
    }, 1000);
  }, []);

  return (
    <div className='deals-of-the-day'>
      <div className='deals_container'>
        <div>
          <img src="/deals-of-the-day/banner-5.png" alt="" />
        </div>
        <div className="timing_container">
          <div className='d-flex justify-content-center gap-1 timing_sub_container'>
            <div className="d-flex flex-column align-items-center bg-light px-0 py-0 time_fixed_width">
              <h1>{date.days}</h1>
              <p>Days</p>
            </div>
            <div className="d-flex align-items-center flex-column bg-light px-0 py-0 time_fixed_width">
              <h1>{date.hours.toString().length < 2 ? `0${date.hours}` : date.hours}</h1>
              <p>Hours</p>
            </div>
            <div className="d-flex align-items-center flex-column bg-light px-0 py-0 time_fixed_width ">
              <h1>{date.minutes.toString().length < 2 ? `0${date.minutes}` : date.minutes}</h1>
              <p>Mins</p>
            </div>
            <div className="d-flex align-items-center flex-column bg-light px-0 py-0 time_fixed_width">
              <h1>{date.seconds.toString().length < 2 ? `0${date.seconds}` : date.seconds}</h1>
              <p>Sec</p>
            </div>
          </div>


          <div className="mt-5 bg-light p-3 rounded-3 shadow">
            <h5 className="card-title"><a href="#" className='text-decoration text-decoration-none'>Seeds of Change Organic Quinoa, Brown, & Red Rice</a></h5>

            <div className="mb-2">
              <span className="text-warning">{'★'.repeat(4)}</span>
              <span className="text-muted ms-1">({4})</span>
            </div>

            <p className="mb-2">
              By <span className="text-success custom-brand">Nestfood</span>
            </p>

            <h5 className="text-success mb-3 d-flex align-items-center justify-content-between gap-3 ">
              <div>
                60%
                <small className="text-muted text-decoration-line-through">
                  $96.96
                </small>
              </div>
              <button className="btn btn-success custom-button-css">
                <CartIcon /> Add
              </button>
            </h5>


          </div>
        </div>
      </div>
      <div className='deals_container'>
        <div>
          <img src="/deals-of-the-day/banner-5.png" alt="" />
        </div>
        <div className="timing_container">
          <div className='d-flex justify-content-center gap-1 timing_sub_container'>
            <div className="d-flex flex-column align-items-center bg-light px-0 py-0 time_fixed_width">
              <h1>{date.days}</h1>
              <p>Days</p>
            </div>
            <div className="d-flex align-items-center flex-column bg-light px-0 py-0 time_fixed_width">
              <h1>{date.hours.toString().length < 2 ? `0${date.hours}` : date.hours}</h1>
              <p>Hours</p>
            </div>
            <div className="d-flex align-items-center flex-column bg-light px-0 py-0 time_fixed_width ">
              <h1>{date.minutes.toString().length < 2 ? `0${date.minutes}` : date.minutes}</h1>
              <p>Mins</p>
            </div>
            <div className="d-flex align-items-center flex-column bg-light px-0 py-0 time_fixed_width">
              <h1>{date.seconds.toString().length < 2 ? `0${date.seconds}` : date.seconds}</h1>
              <p>Sec</p>
            </div>
          </div>


          <div className="mt-5 bg-light p-3 rounded-3 shadow">
            <h5 className="card-title"><a href="#" className='text-decoration text-decoration-none'>Seeds of Change Organic Quinoa, Brown, & Red Rice</a></h5>

            <div className="mb-2">
              <span className="text-warning">{'★'.repeat(4)}</span>
              <span className="text-muted ms-1">({4})</span>
            </div>

            <p className="mb-2">
              By <span className="text-success custom-brand">Nestfood</span>
            </p>

            <h5 className="text-success mb-3 d-flex align-items-center justify-content-between gap-3 ">
              <div>
                60%
                <small className="text-muted text-decoration-line-through">
                  $96.96
                </small>
              </div>
              <button className="btn btn-success custom-button-css">
                <CartIcon /> Add
              </button>
            </h5>


          </div>
        </div>
      </div>
      <div className='deals_container'>
        <div>
          <img src="/deals-of-the-day/banner-5.png" alt="" />
        </div>
        <div className="timing_container">
          <div className='d-flex justify-content-center gap-1 timing_sub_container'>
            <div className="d-flex flex-column align-items-center bg-light px-0 py-0 time_fixed_width">
              <h1>{date.days}</h1>
              <p>Days</p>
            </div>
            <div className="d-flex align-items-center flex-column bg-light px-0 py-0 time_fixed_width">
              <h1>{date.hours.toString().length < 2 ? `0${date.hours}` : date.hours}</h1>
              <p>Hours</p>
            </div>
            <div className="d-flex align-items-center flex-column bg-light px-0 py-0 time_fixed_width ">
              <h1>{date.minutes.toString().length < 2 ? `0${date.minutes}` : date.minutes}</h1>
              <p>Mins</p>
            </div>
            <div className="d-flex align-items-center flex-column bg-light px-0 py-0 time_fixed_width">
              <h1>{date.seconds.toString().length < 2 ? `0${date.seconds}` : date.seconds}</h1>
              <p>Sec</p>
            </div>
          </div>


          <div className="mt-5 bg-light p-3 rounded-3 shadow">
            <h5 className="card-title"><a href="#" className='text-decoration text-decoration-none'>Seeds of Change Organic Quinoa, Brown, & Red Rice</a></h5>

            <div className="mb-2">
              <span className="text-warning">{'★'.repeat(4)}</span>
              <span className="text-muted ms-1">({4})</span>
            </div>

            <p className="mb-2">
              By <span className="text-success custom-brand">Nestfood</span>
            </p>

            <h5 className="text-success mb-3 d-flex align-items-center justify-content-between gap-3 ">
              <div>
                60%
                <small className="text-muted text-decoration-line-through">
                  $96.96
                </small>
              </div>
              <button className="btn btn-success custom-button-css">
                <CartIcon /> Add
              </button>
            </h5>


          </div>
        </div>
      </div>
      <div className='deals_container'>
        <div>
          <img src="/deals-of-the-day/banner-5.png" alt="" />
        </div>
        <div className="timing_container">
          <div className='d-flex justify-content-center gap-1 timing_sub_container'>
            <div className="d-flex flex-column align-items-center bg-light px-0 py-0 time_fixed_width">
              <h1>{date.days}</h1>
              <p>Days</p>
            </div>
            <div className="d-flex align-items-center flex-column bg-light px-0 py-0 time_fixed_width">
              <h1>{date.hours.toString().length < 2 ? `0${date.hours}` : date.hours}</h1>
              <p>Hours</p>
            </div>
            <div className="d-flex align-items-center flex-column bg-light px-0 py-0 time_fixed_width ">
              <h1>{date.minutes.toString().length < 2 ? `0${date.minutes}` : date.minutes}</h1>
              <p>Mins</p>
            </div>
            <div className="d-flex align-items-center flex-column bg-light px-0 py-0 time_fixed_width">
              <h1>{date.seconds.toString().length < 2 ? `0${date.seconds}` : date.seconds}</h1>
              <p>Sec</p>
            </div>
          </div>


          <div className="mt-5 bg-light p-3 rounded-3 shadow">
            <h5 className="card-title"><a href="#" className='text-decoration text-decoration-none'>Seeds of Change Organic Quinoa, Brown, & Red Rice</a></h5>

            <div className="mb-2">
              <span className="text-warning">{'★'.repeat(4)}</span>
              <span className="text-muted ms-1">({4})</span>
            </div>

            <p className="mb-2">
              By <span className="text-success custom-brand">Nestfood</span>
            </p>

            <h5 className="text-success mb-3 d-flex align-items-center justify-content-between gap-3 ">
              <div>
                60%
                <small className="text-muted text-decoration-line-through">
                  $96.96
                </small>
              </div>
              <button className="btn btn-success custom-button-css">
                <CartIcon /> Add
              </button>
            </h5>


          </div>
        </div>
      </div>

    </div>
  )
}

export default DealsOfTheDay