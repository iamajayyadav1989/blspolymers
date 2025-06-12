import React from "react";
import compoundingImage from "../assets/images/compounding-services.jpg";
import tradingImage from "../assets/images/polymer-trading.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="services-hero-section d-flex">
        <div className="container">
          <div className="breadcrumb-container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li
                  className="breadcrumb-item active text-danger"
                  aria-current="page"
                >
                  Services
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="container about-section">
        <h3 className="section-title mt-5">Services</h3>

        <div className="row vision-mission services-section mb-5 pt-5">
          <div className="col-md-6 border-right">
            <div className="d-flex">
              <img
                src={compoundingImage}
                alt="Compounding Services"
                className="img-services"
              />
              <div className="vision-text">
                <h3>Toll Compounding Services</h3>
                <p>
                  BLS Polymers offers Toll Compounding services for customers
                  who have developed a compound formulation and require BLS
                  Polymers' professional services. We have expertise in
                  undertaking compounding solutions that allow our customers to
                  supply the raw materials and specify formulas. We provide
                  top-notch quality Toll Compounding services that satisfy
                  customers every time they connect with us. We undertake a
                  process-driven approach for each and every task with a focus
                  on quality, consistency & use of top class materials.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex">
              <img
                src={tradingImage}
                alt="Polymer Trading"
                className="img-services"
              />
              <div className="mission-text">
                <h3>Polymer Trading</h3>
                <p>
                  Our Sales and Trading Division provides polymer trading
                  services to our customers and channel partners worldwide. In
                  our capacity as DCA for Delhi region to Indian Oil
                  Corporation, we have direct access to polymer feedstock
                  (polyolefins). Our relationship with IndianOil places us in
                  the enviable position of supplying from a producer that
                  emphasizes the highest level of quality and consistency in all
                  its products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
