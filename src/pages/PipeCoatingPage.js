import React from "react";
import PipeCoating from "../components/PipeCoating";
import { Link } from "react-router-dom";

const PipeCoatingPage = () => {
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
                  Pipe Coating
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="contact-section">
        <div className="container">
          <h3 className="section-title contact-title">Pipe Coating</h3>
          <p>
            Polyethylene/Polypropylene Top Coat Compound for 3 Layer Coating
            application.
          </p>
          <p>
            Pipe coating products play a crucial role in enhancing the
            durability, efficiency, and lifespan of pipelines used in the oil &
            gas industry, city gas distribution (CGD), and water & sewage
            systems. These coatings provide essential protection against
            corrosion, abrasion, and environmental degradation, ensuring the
            safe and long-term operation of pipelines.
          </p>
          <p>
            BLS POLYMERS being one of the first domestic producers of Pipe
            coating material adheres to provide pipe coating products having
            benefits of corrosion protection, enhanced flow efficiency,
            mechanical protection, reduced maintenance costs & environmental
            safety.
          </p>
          <p>
            While India’s pipeline infrastructure is expanding rapidly due to
            growing demand for oil & gas, CGD, and water distribution systems,
            BLS POLYMERS strive to provide pipe coating solutions with its
            product to ensure longevity, efficiency, and safety of pipelines
            across various industries with eco-friendly, high performance
            coatings with increased adoption of polymer based and non-toxic
            coatings.
          </p>
          <ul className="list-unstyled">
            <li>HDPE BLACK BLS PC 5555</li>
            <li>HDPE BLACK BLS PC 5575</li>
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

export default PipeCoatingPage;
