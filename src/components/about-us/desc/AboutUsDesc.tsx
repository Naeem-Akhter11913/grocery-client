import React, { FC } from 'react'
import './style.css';


type Props = {
  images: string[]|null
}
const AboutUsDesc: FC<Props> = ({ images }) => {

  return (
    <div className='container'>
      <div className="row">
        <div className="col-6">
          <img src="/about-us/about-1.png" alt="About Us" className="img-fluid" />
        </div>
        <div className="col-6">
          <h1>Welcome to Nest</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum. <br /><br />

            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>

          <div className="slick-carousel" >
            {images && images.map((url, index) => (
              <img src={url} height={300} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsDesc