import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { Vendor } from "../types/vendersTypes";
import './VendersList.css'
import { Ratings } from "@/utils/Ratings";

interface Props {
    vendor: Vendor[];
}

const VendersList: React.FC<Props> = ({ vendor }) => {
    return (
            <div className="row g-3 px-3">
                {vendor.map((venderItems, index) => (
                    <div className={`col-12 col-sm-6`} key={venderItems.id}>
                    <div className={`store-card`}>
                        <span className="store-badge">Mall</span>
                        <div className="text-center d-flex flex-column gap-3">
                            <img
                                src={`vendorsList/${venderItems.logo}`}
                                alt="Logo"
                                className="store-logo"
                            />
                            <div className="product-count">{venderItems.productsCount} products</div>
                        </div>

                        <div className="flex-grow-1">
                            <small className="text-secondary"> Since {venderItems.since}</small>
                            <h5 className="mb-1">{venderItems.name}</h5>
                            <div className="rating mb-2">
                                <div className="d-flex gap-1">
                                    {Array(venderItems.rating).fill(null).map((_, ind) => <Ratings key={ind} color={'#f59758'} />)}
                                    <span className="text-secondary ms-1">(4.0)</span>
                                </div>
                            </div>
                            <p className="mb-1 text-secondary">
                                <FaLocationDot className="me-1 text-success" /> <strong>Address: </strong>{venderItems.address}
                            </p>
                            {/* Call Us & Visit Store */}
                            <div className="d-flex align-items-center justify-content-between mt-3 flex-wrap gap-2">
                                <span className="call-info">
                                    <FaPhoneAlt className="me-1 text-success" />
                                    <strong>Call Us: </strong> {venderItems.phone}
                                </span>
                                <a href={`${venderItems.link}`} className="btn btn-success btn-sm btn-visit">
                                    Visit Store <FaArrowRight />
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
    );
};

export default VendersList;
