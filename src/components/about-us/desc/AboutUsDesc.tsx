// 'use client'
// import React, { FC } from 'react';
// import './style.css';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Image from 'next/image';

// type Props = {
//   images: string[] | null;
// };

// const AboutUsDesc: FC<Props> = ({ images }) => {
//   return (
//     <section className="container">
//       <div className="row">
//         <div className="col-5">
//           <img src="/about-us/about-1.png" alt="About Us" className="img-fluid" />
//         </div>

//         <div className="col-7">
//           <h1>Welcome to Nest</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//             dolor in reprehenderit in voluptate id est laborum.
//             <br />
//             <br />
//             Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat
//             legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante
//             Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa
//             tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
//             consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
//           </p>

//           {images && images.length > 0 ? (
//             <Swiper
//               modules={[Navigation, Pagination]}
//               spaceBetween={10}
//               loop
//               centeredSlides
//               autoplay
//               grabCursor
//               slidesPerView={2}
//               pagination={{ clickable: true, dynamicBullets: true }}
//               navigation={{
//                 nextEl: '.swiper-button-next-custom',
//                 prevEl: '.swiper-button-prev-custom',
//               }}
//               breakpoints={{
//                 0: { slidesPerView: 1 },
//                 520: { slidesPerView: 2 },
//                 950: { slidesPerView: 3 },
//               }}
//               className="slide-content-custom"
//             >
//               {images.map((url, index) => (
//                 <SwiperSlide key={index}>
//                   <Image src={url} width={285} height={300} alt={`About slide ${index}`} objectFit='contain' />
//                 </SwiperSlide>
//               ))}

//               <div className="swiper-button-next swiper-navBtn swiper-button-next-custom"></div>
//               <div className="swiper-button-prev swiper-navBtn swiper-button-prev-custom"></div>
//               <div className="swiper-pagination"></div>
//             </Swiper>
//           ) : (
//             <h1>Image slider will be added here later....</h1>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUsDesc;


'use client'
import React, { FC } from 'react';
import './style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

type Props = {
  images: string[] | null;
};

const AboutUsDesc: FC<Props> = ({ images }) => {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        
        {/* Left side image */}
        <div className="col-12 col-md-5 mb-4 mb-md-0 text-center">
          <img
            src="/about-us/about-1.png"
            alt="About Us"
            className="img-fluid w-100 h-auto"
          />
        </div>

        {/* Right side content */}
        <div className="col-12 col-md-7">
          <h1 className="mb-3 text-center text-md-start">Welcome to Nest</h1>
          <p className="mb-4 text-justify">
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

          {/* Swiper carousel */}
          {images && images.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={15}
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              grabCursor
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              className="slide-content-custom"
            >
              {images.map((url, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={url}
                    width={285}
                    height={300}
                    alt={`About slide ${index}`}
                    className="w-100 h-auto"
                  />
                </SwiperSlide>
              ))}

              <div className="swiper-button-next swiper-navBtn swiper-button-next-custom"></div>
              <div className="swiper-button-prev swiper-navBtn swiper-button-prev-custom"></div>
              <div className="swiper-pagination"></div>
            </Swiper>
          ) : (
            <h4 className="text-center">Image slider will be added here later....</h4>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUsDesc;
