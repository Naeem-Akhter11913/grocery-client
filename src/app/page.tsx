// export default function Home() {
//   return (
//     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//       </div>
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <img src="/heroSlider/slider-1.png" className="d-block w-100" alt="slider-1" />
//         </div>
//         <div className="carousel-item">
//           <img src="/heroSlider/slider-2.png" className="d-block w-100" alt="slider-2" />
//         </div>
//       </div>
//       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }

'use client'
export default function Home() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active position-relative">
          <img src="/heroSlider/slider-1.png" className="d-block w-100" alt="slider-1" />
          <div className="custom-caption">
            <h2>First Slide Heading</h2>
            <p>This is a description for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item position-relative">
          <img src="/heroSlider/slider-2.png" className="d-block w-100" alt="slider-2" />
          <div className="custom-caption">
            <h2>Second Slide Heading</h2>
            <p>This is a description for the second slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      <style jsx>{`
        .custom-caption {
          position: absolute;
          top: 50%;
          left: 5%;
          transform: translateY(-50%);
          color: white;
          text-align: left;
          max-width: 40%;
          background: rgba(0, 0, 0, 0.4);
          padding: 20px;
          border-radius: 8px;
        }

        .custom-caption h2 {
          font-size: 2rem;
          font-weight: bold;
        }

        .custom-caption p {
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
}
