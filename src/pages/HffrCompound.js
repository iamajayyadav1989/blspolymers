import React from "react";
import { Link } from "react-router-dom";

const HffrCompound = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hffr-hero-section d-flex">
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
                  HFFR Compound
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="contact-section">
        <div className="container">
          <h3 className="section-title contact-title">
            BLS POLYMERS SOLUTIONS FOR HFFR
          </h3>
          <p>
            The use of halogen free flame retardant (HFFR) is widespread due to
            the increasing concern about the health and environmental risks.
            HFFR compounds are being increasingly used to produce flame
            retardant polyolefins. HFFR compounds are easily processed with the
            high filler content on major compounding equipments and have
            higher-level fire retardancy. HFFR compounds can easily withstand
            high temperatures. They provide excellent performance in cold
            temperature and also have tear resistance properties.
          </p>
          <p>
            They are finding increasing use as replacements for PVC and other
            halogenated polymers for applications where lower smoke and lower
            acid gas evolution are required during a fire situation. This could
            be in an underground or over ground railway, airport, ship, offshore
            rig or in any other public building or space.
          </p>
          <p>
            HFFR compounds can be either thermoplastic or cross-linked, the
            latter are used where higher temperature ratings are required such
            as the insulation of cable conductors. This can also be applied to
            other applications where improved heat distortion temperature is
            required or high burst strengths such as in hot and cold water
            pipes. Crosslinking can also improve the crack resistance and the
            low temperature performance, particularly for flexible applications.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 pt-0">
        <div className="container">
          <div className="row">
            {/* Left Image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={`${process.env.PUBLIC_URL}/images/HFFR_Compound.jpg`}
                alt="HFFR Compounds"
                className="img-fluid"
              />
            </div>

            {/* Right Text */}
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4">
                BLS OFFERS HFFR COMPOUNDS WITH THE FOLLOWING PROPERTIES
              </h3>
              <div className="row">
                <div className="col-6 border-right">
                  <ul className="list-unstyled">
                    <li>+ Halogen Free Compound</li>
                    <li>+ Good Flame Retardancy</li>
                    <li>+ Low Smoke Emission</li>
                    <li>+ Very Low Toxicity</li>
                    <li>+ Good Mechanical Properties</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li>+ High Line Speed</li>
                    <li>+ Easy Processability</li>
                    <li>+ Good Chemical Resistance</li>
                    <li>+ Easy Colourability</li>
                    <li>+ Higher L.O.I - 40 (RoHS Compliant)</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 mb-2">
                Will meet LTS1, LTS2, LTS3, LTS4 specification of BS 7655, EN
                60332-1-2 according to IEC 60332-1-2, UL 1581 Section 1061
              </p>

              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li>BLS HFFR 1009</li>
                    <li>BLS HFFR 1072</li>
                    <li>BLS HFFR 1018</li>
                    <li>BLS HFFR 1036</li>
                    <li>BLS HFFR 4050</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li>BLS HFFR 3049</li>
                    <li>BLS HFFR 3016</li>
                    <li>BLS HFFR 3130</li>
                    <li>BLS HFFR 3650</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h4 className="pt-5">
            Technical Data Sheets will be available on request. Please mail us
            on <a href="mailto:info@blspolymers.com">info@blspolymers.com</a>
          </h4>
        </div>
      </section>
    </>
  );
};

export default HffrCompound;
