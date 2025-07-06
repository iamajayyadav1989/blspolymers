import React from "react";
import PipeCoating from "../components/PipeCoating";
import { Link } from "react-router-dom";

const Adhesive = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="pipecoating-hero-section d-flex">
        <div className="container">
          <div className="breadcrumb-container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/products">Products</Link>
                </li>
                <li
                  className="breadcrumb-item active text-danger"
                  aria-current="page"
                >
                  Adhesives
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <section className="contact-section">
        <div className="container">
          <h3 className="section-title contact-title">Adhesives</h3>
          <p>
            Adhesive for reliable bonding between Top coat & Fusion Bonded Epoxy
            Layer
          </p>
          <ul className="list-unstyled">
            <li>BLS PC 1009</li>
          </ul>
        </div>
      </section>

      {/* Pipe Coating Section */}
      <PipeCoating />
      <div className="container">
        <h4 className="pb-5">
          Technical Data Sheets will be available on request. Please mail us at{" "}
          <a href="mailto:info@blspolymers.com">info@blspolymers.com</a>
        </h4>
      </div>
    </>
  );
};

export default Adhesive;
