import React from "react";
import xlpeImage from "../assets/images/XLPE-COMPOUND.jpg";
import { Link } from "react-router-dom";

const XlpeCompound = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="xlpe-hero-section d-flex">
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
                  XLPE Compound
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* XLPE Description Section */}
      <section className="contact-section">
        <div className="container">
          <h3 className="section-title contact-title">
            BLS POLYMERS SOLUTIONS FOR XLPE
          </h3>
          <p>
            Cross-linked polyethylene, commonly abbreviated PEX or XLPE, is a
            form of polyethylene with cross-links. Almost all PEX used for pipe
            and tubing is made from high density polyethylene (HDPE). PEX
            contains cross-linked bonds in the polymer structure, changing the
            thermoplastic to a thermoset. Cross-linking is accomplished during
            or after the extrusion of the tubing.
          </p>
          <p>
            Polyethylene has been and still is used as a cable insulant, but, as
            a thermoplastic material, its applications are limited by thermal
            constraints. Crosslinking improves the elevated-temperature
            properties of the base polymer. The effect of the cross-linking is
            to inhibit the movement of molecules with respect to each other
            under the stimulation of heat and this gives the improved stability
            at elevated temperatures compared with the thermoplastic materials.
            This permits higher operating temperatures, both for normal loading
            and under short-circuit conditions, so that an XLPE cable has a
            higher current rating than its equivalent PVC counterpart. XLPE has
            one of the best water resistance and low permeability capacities and
            abilities.
          </p>
          <p>
            Almost all cross-linkable polyethylene compounds (XLPE) for wire and
            cable applications are based on LDPE. XLPE-insulated cables have a
            rated maximum conductor temperature of 90 °C and an emergency rating
            up to 140 °C, depending on the standard used. They have a conductor
            short-circuit rating of 250 °C. XLPE has excellent dielectric
            properties, making it useful for medium voltage-10 to 50 kV AC, and
            high voltage cables-up to 380 kV AC-voltage, and several hundred kV
            DC.
          </p>
          <p>
            Numerous modifications in the basic polymer structure can be made to
            maximize productivity during the manufacturing process. For medium
            voltage applications, reactivity can be boosted significantly. This
            results in higher line speeds in cases where limitations in either
            the curing or cooling processes within the continuous vulcanization
            (CV) tubes used to cross-link the insulation. XLPE insulations can
            be modified to limit the amount of by-product gases generated during
            the cross-linking process. This is particularly useful for high
            voltage cable and extra-high voltage cable applications, where
            degassing requirements can significantly lengthen cable
            manufacturing time.
          </p>
        </div>
      </section>

      {/* Image + Product List */}
      <section className="py-5 pt-0">
        <div className="container">
          <div className="row">
            {/* Image Left */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src={xlpeImage} alt="XLPE Compounds" className="img-fluid" />
            </div>

            {/* Product Details Right */}
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4 text-uppercase">
                BLS Polymers' solutions for Crosslinkable PE (XLPE) Compounds
              </h3>

              <div className="row">
                <div className="col-12">
                  <ol className="list-unstyled">
                    <li>
                      <strong>BLS XL 1101 / BLS XL 1102</strong>
                      <p>Natural Curing Silane Crosslinkable PE Compound</p>
                    </li>
                    <li>
                      <strong>BLS XL 1301 / BLS XL 1102</strong>
                      <p>
                        Moisture curing Silane Crosslinkable PE Compound For HV
                        Power Cable Insulation
                      </p>
                    </li>
                    <li>
                      <strong>BLS XL 1101 / BLS XL 1105</strong>
                      <p>
                        Silane Crosslinkable PE Compound For LV ABC Insulation
                      </p>
                    </li>
                    <li>
                      <strong>BLS XL 3301 / BLS XL 1102</strong>
                      <p>
                        Silane Crosslinkable PE Compound For High Voltage Power
                        Cable
                      </p>
                    </li>
                    <li>
                      <strong>BLS XL 1110 / BLS XL 1102</strong>
                      <p>
                        Silane Crosslinkable PE Compound For HV Power Cable
                        Insulation
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <h4 className="pt-5">
            Technical Data Sheets will be available on request. Please mail us
            on <a href="mailto:info@blspolymers.com">info@blspolymers.com</a>
          </h4>
        </div>
      </section>
    </>
  );
};

export default XlpeCompound;
