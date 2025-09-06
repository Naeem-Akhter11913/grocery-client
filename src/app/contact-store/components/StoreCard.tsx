// components/StoreCard.tsx
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function StoreCard() {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body text-center bg-info rounded">
        <img src="/nestfood-logo.png" alt="Nest Food Logo" className="mx-auto mb-3" style={{ width: "80px" }} />
        <p className="text-muted">Since 2012</p>
        <h4 className="fw-bold">Nest Food., Ltd</h4>
        <p className="text-warning fw-bold">⭐ 4.0</p>

        <p className="small mt-3">
          Got a smooth, buttery spread in your fridge? Chances are good that it’s Good Chef.
          This brand made Lionto's list of the most popular grocery brands across the country.
        </p>

        <h6 className="mt-4 fw-bold">Follow Us</h6>
        <div className="d-flex justify-content-center gap-3 fs-5 mb-3">
          <FaTwitter className="text-primary" />
          <FaFacebook className="text-primary" />
          <FaInstagram className="text-danger" />
          <FaPinterest className="text-danger" />
        </div>

        <div className="text-start">
          <p className="mb-1"><FaMapMarkerAlt /> 5171 W Campbell Ave, Utah, USA</p>
          <p><FaPhone /> (+91) - 540-025-124553</p>
        </div>

        <button className="btn btn-success w-100 mt-2">Contact Seller</button>
      </div>
    </div>
  );
}
