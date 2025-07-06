import React from "react";
import PipeCoating from "../components/PipeCoating";
import { Link } from "react-router-dom";

const PECompound = () => {
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
                  PE Compounds
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* PE Compound Section */}
      <section className="contact-section pe-compound">
        <div className="container">
          <h3 className="section-title contact-title">PE Compounds</h3>
          <div className="row">
            <div className="col-12">
              <p>
                Polyethylene Compounds (HDPE, MDPE, LDPE & LLDPE) for Insulation
                & Jacketing & Sheathing
              </p>
              <ul className="list-unstyled">
                <li>BLS 8888 OFC</li>
                <li>BLS MD 4507</li>
                <li>BLS 2222</li>
                <li>BLS HD 5505</li>
                <li>BLS 7777 ORUV</li>
                <li>LLDPE 6666</li>
                <li>BLS 4444</li>
                <li>BLS 4488</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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

export default PECompound;
