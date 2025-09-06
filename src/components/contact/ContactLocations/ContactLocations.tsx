"use client"
import React, { FC } from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import "./style.css"

const locations = [
  {
    title: "Office",
    address: "205 North Michigan Avenue, Suite 810",
    city: "Chicago, IL 60601, USA",
    phone: "(123) 456-7890",
    email: "contact@Evara.com",
    lat: 41.8853,
    lng: -87.6216,
  },
  {
    title: "Studio",
    address: "350 5th Ave",
    city: "New York, NY 10118, USA",
    phone: "(123) 456-7890",
    email: "studio@Evara.com",
    lat: 40.7484,
    lng: -73.9857,
  },
  {
    title: "Shop",
    address: "1 Dr Carlton B Goodlett Pl",
    city: "San Francisco, CA 94102, USA",
    phone: "(123) 456-7890",
    email: "shop@Evara.com",
    lat: 37.7793,
    lng: -122.4193,
  },
  {
    title: "Warehouse",
    address: "600 Congress Ave",
    city: "Austin, TX 78701, USA",
    phone: "(123) 456-7890",
    email: "warehouse@Evara.com",
    lat: 30.2672,
    lng: -97.7431,
  },
];



type conectLocationType = {
  searchPlace: (latlng: { lat: number; lng: number }) => void;
}

const ContactLocations: FC<conectLocationType> = ({ searchPlace }) => {
  return (
    <div className="locations-container">
      {locations.map((loc, index) => (
        <div className="location-card" key={index}>
          <h3>{loc.title}</h3>
          <p>{loc.address}</p>
          <p>{loc.city}</p>
          <p>
            <a href={`tel:${loc.phone}`}>Phone: {loc.phone}</a>
          </p>
          <p>
            <a href={`mailto:${loc.email}`}>Email: {loc.email}</a>
          </p>
          <button className="map-btn" onClick={() => searchPlace({ lat: loc.lat, lng: loc.lng })}>
            <FaMapMarkerAlt className="icon" /> View map
          </button>
        </div>
      ))}
    </div>
  )
}

export default ContactLocations
