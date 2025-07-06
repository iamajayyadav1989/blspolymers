import React from "react";
import pvcImage from "../assets/images/PVC_Compounds.jpg";
import { Link } from "react-router-dom";

const PVCCompound = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="pvc-hero-section d-flex">
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
                  PVC Compounds
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h3 className="section-title contact-title">
            BLS Polymers solutions for PVC Compounds
          </h3>
          <p>
            Polyvinyl chloride (PVC) is a petroleum derivative and is obtained
            from Naphtha. As a thermoplastic, PVC is made of 57% chlorine
            (derived from industrial grade salt) and 43% carbon (derived
            predominantly from oil / gas via ethylene). This chlorine gives to
            PVC excellent fire resistance. PVC has high hardness and mechanical
            properties. The mechanical properties enhance with the molecular
            weight increasing but decrease with the temperature increasing. The
            mechanical properties of rigid PVC (uPVC) are very good; the elastic
            modulus can reach 1500-3,000 MPa. The soft PVC (flexible PVC)
            elastic is 1.5-15 MPa. PVC has excellent electrical insulation
            properties, making it ideal for cabling applications. Its good
            impact strength and weatherproof attributes make it ideal for
            construction products.
          </p>

          <p>
            PVC is durable, cheap, and easily worked. Before PVC can be made
            into finished products, it always requires conversion into a
            compound by the incorporation of additives (but not necessarily all
            of the following) such as heat stabilizers, UV stabilizers,
            plasticizers, processing aids, impact modifiers, thermal modifiers,
            fillers, flame retardants, biocides, blowing agents and smoke
            suppressors, and, optionally, pigments. The choice of additives used
            for the PVC finished product is controlled by the cost performance
            requirements of the end use specification. A variety of processes
            are used to form PVC Compounds viz; extrusion, injection molding,
            blow molding, calendaring, spreading and coating.
          </p>
        </div>
      </section>

      {/* Image + Product List Section */}
      <section className="py-5 pt-0">
        <div className="container">
          <div className="row">
            {/* Left Image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src={pvcImage} alt="PVC Compounds" className="img-fluid" />
            </div>

            {/* Right Text Content */}
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4">
                BLS POLYMERS SOLUTIONS FOR PVC COMPOUNDS
              </h3>
              <div className="row">
                <div className="col-12 border-right">
                  <ul className="list-unstyled">
                    <li>BLS PVC TI 1 4691</li>
                    <li>BLS A3 TYPE A 4588</li>
                    <li>BLS TYPE A 3193</li>
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

export default PVCCompound;
