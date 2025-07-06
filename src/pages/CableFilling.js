import React from "react";
import cfcImage from "../assets/images/CFC.jpg";
import { Link } from "react-router-dom";

const CableFilling = () => {
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
                  Cable Filling Compound
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="contact-section pb-0">
        <div className="container">
          <h3 className="section-title contact-title">
            BLS Polymers' solutions for Cable Filling Compounds
          </h3>
          <p>
            Cable-filling compounds provide a watertight environment and
            protection against corrosion and potential dielectric problems (as
            well as other benefits). Often, these compounds are characterised by
            their high melting point, their water-resistant nature and their
            excellent dielectric properties, which slow down the deterioration
            of the cable during its service life.
          </p>

          <p>
            Cable Filling Compounds (CFC) are basically highly crystalline in
            nature with excellent heat stability & high melting potential. CFCs
            are widely used in telecommunication industries. They are prepared
            and developed according to specific requirements of the clients.
            CFCs are easily compatible with the Jelly Filled Cables and have
            good thermal and oxidation stabilities. They can be applied into the
            cable manufacturing process from 90°C to 95°C temperature in
            semi-liquid techniques and from 100°C to 105°C temperature in liquid
            techniques.
          </p>

          <p>
            CFC when heated, can be poured and once it cools, forms into a hard
            mass. It has low water vapour permeability, and is insoluble in
            water and subsoil chemicals. It also gives an excellent performance
            for electrical application. It offers resistance to weathering and
            to chemical reactions.
          </p>
        </div>

        {/* Voltage Range Table */}
        <div className="container my-4">
          <div
            className="table-responsive"
            style={{ width: "50%", marginLeft: 0 }}
          >
            <table className="table table-bordered table-striped">
              <thead className="table-secondary">
                <tr>
                  <th>Type</th>
                  <th>Voltage Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Low Voltage Cables</td>
                  <td>Up to 1.1 KV</td>
                </tr>
                <tr>
                  <td>Medium Voltage Cables</td>
                  <td>Above 1.1 KV &amp; Up to 33 KV</td>
                </tr>
                <tr>
                  <td>Extra High Voltage Cables</td>
                  <td>66 KV &amp; Above</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Grade and Image Section */}
      <section className="py-5 pt-0">
        <div className="container">
          <div className="row">
            {/* Image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={cfcImage}
                alt="Cable Filling Compound"
                className="img-fluid"
              />
            </div>

            {/* Grade Info */}
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  <ol className="list-unstyled">
                    <li>Grade BLS 201</li>
                  </ol>
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

export default CableFilling;
