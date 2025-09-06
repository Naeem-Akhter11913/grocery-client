"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaThLarge } from "react-icons/fa";
import { MdSort } from "react-icons/md";
import './vendorsSearch.css';


type vendorComponentProbs = {
  callBackFunc: (value: string) => void,
  serchKeywords: string
}

export default function VendorsSearch({ callBackFunc, serchKeywords }: vendorComponentProbs) {
  const [showCount, setShowCount] = useState(50);
  const [sortBy, setSortBy] = useState("Featured");

  return (
    <div className="container text-center py-5">
      <h1 className="fw-bold mb-4">Vendors List</h1>
      <div className="d-flex justify-content-center mb-3">
        <div className="input-group position-relative search-style" style={{ maxWidth: "800px" }} >
          <input
            type="text"
            className=""
            placeholder="Search vendors (by name or ID)..."
            value={serchKeywords}
            onChange={(e) => callBackFunc(e.target.value)}
          />
          <button className="btn position-absolute" type="button">
            <FiSearch />
          </button>
        </div>
      </div>

      <div className="filter-style d-flex justify-content-between align-items-center flex-wrap ">
        <div className="text-content">
          <p className="m-0">
            We have <span className="text-success fw-bold">780</span> vendors now
          </p>
        </div>

        <div className="d-flex justify-content-center align-items-center gap-3 mt-3 mt-md-0">
          <div className="input-group filter" >
            <span className="input-group-text">
              <FaThLarge />
            </span>
            <select
              className="form-select p-2"
              value={showCount}
              onChange={(e) => setShowCount(Number(e.target.value))}
            >
              <option value={10}>Show: 10</option>
              <option value={25}>Show: 25</option>
              <option value={50}>Show: 50</option>
              <option value={100}>Show: 100</option>
            </select>
          </div>

          <div className="input-group filter" >
            <span className="input-group-text">
              <MdSort />
            </span>
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Featured">Sort by: Featured</option>
              <option value="Newest">Sort by: Newest</option>
              <option value="Name">Sort by: Name</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
