// 'use client'
// import React, { FC, useEffect } from 'react'
// import './style.css';


// type Props = {
//   images: string[] | null
// }
// const AboutUsDesc: FC<Props> = ({ images }) => {

//   useEffect(() => {
//     // if (typeof window !== 'undefined') return ;
//     const interval = setTimeout(() => {
//       // @ts-ignore
//       if (typeof window !== 'undefined' && window.Swiper) {
//         // @ts-ignore
//         new window.Swiper('.slide-content-custom', {
//           slidesPerView: 4,
//           spaceBetween: 10,
//           loop: true,
//           centeredSlides: true,
//           grabCursor: true,
//           pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//             dynamicBullets: true,
//           },
//           navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           },
//           breakpoints: {
//             0: {
//               slidesPerView: 1,
//             },
//             520: {
//               slidesPerView: 2,
//             },
//             950: {
//               slidesPerView: 3,
//             },
//           },
//         });
//       }
//     }, 1000); // Delay initialization to ensure DOM is ready

//     return () => clearTimeout(interval);
//   }, []);

//   return (
//     <div className='container'>
//       <div className="row">
//         <div className="col-6">
//           <img src="/about-us/about-1.png" alt="About Us" className="img-fluid" />
//         </div>
//         <div className="col-6">
//           <h1>Welcome to Nest</h1>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum. <br /><br />

//             Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>

//           {/* <div className="slick-carousel" >
//             {images && images.map((url, index) => (
//               <img src={url} height={300} key={index} />
//             ))}
//           </div> */}
// <h1>Imapge slider will be added here later....</h1>
//           {/* <div className="slide-container-custom swiper">

//             <div className="slide-content-custom">
//               <div className="card-wrapper swiper-wrapper slick-carousel">
//                 {images && images.map((url, index) => (
//                   <img src={url} height={300} key={index} />
//                 ))}
//               </div>


//             </div>
//             <div className="swiper-button-next swiper-navBtn swiper-button-next-custom"></div>
//             <div className="swiper-button-prev swiper-navBtn swiper-button-prev-custom"></div>
//             <div className="swiper-pagination"></div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AboutUsDesc

'use client'
import React, { FC } from 'react';
import './style.css';

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

type Props = {
  images: string[] | null;
};

const AboutUsDesc: FC<Props> = ({ images }) => {
  return (
    <section className="mx-1">
      <div className="row">
        {/* Left Side Image */}
        <div className="col-6">
          <img src="/about-us/about-1.png" alt="About Us" className="img-fluid" />
        </div>

        {/* Right Side Content */}
        <div className="col-6">
          <h1>Welcome to Nest</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate id est laborum.
            <br />
            <br />
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat
            legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante
            Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa
            tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
          </p>

          {/* Swiper Slider */}
          {images && images.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              loop
              centeredSlides
              autoplay
              grabCursor
              slidesPerView={1}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                520: { slidesPerView: 2 },
                950: { slidesPerView: 3 },
              }}
              className="slide-content-custom"
            >
              {images.map((url, index) => (
                <SwiperSlide key={index}>
                  <Image src={url} width={245} height={500} alt={`About slide ${index}`} objectFit="cover"/>
                </SwiperSlide>
              ))}

              {/* Swiper Controls */}
              <div className="swiper-button-next swiper-navBtn swiper-button-next-custom"></div>
              <div className="swiper-button-prev swiper-navBtn swiper-button-prev-custom"></div>
              <div className="swiper-pagination"></div>
            </Swiper>
          ) : (
            <h1>Image slider will be added here later....</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUsDesc;
