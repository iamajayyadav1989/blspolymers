import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { adminBaseUrl } from "../App";

const PowerCables = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    axios
      .get(`${adminBaseUrl}/api/powercables`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error("Failed to load PowerCables", err);
        setError("Failed to load data.");
      });
  }, []);

  if (error) return <div>{error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <section className="product-section">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between pb-4">
          <div className="col" data-aos="fade-right">
            <h2 className="section-title">{data.title}</h2>
          </div>
          <div className="col-auto" data-aos="fade-left">
            <a href={data.buttonLink} className="btn btn-primary">
              {data.buttonText}
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 pr-0" data-aos="fade-right">
            <img
              src={
                data.image
                  ? `${process.env.PUBLIC_URL}/images/${data.image}`
                  : `${process.env.PUBLIC_URL}/images/default.jpg`
              }
              alt="Power Cables"
              className="img-fluid full-width"
            />
          </div>
          <div className="col-lg-6 pl-0" data-aos="fade-left">
            {Array.isArray(data.products) &&
              data.products.map((product, index) => (
                <div
                  className={`product-info ${index === 0 ? "active" : ""}`}
                  key={product._id || index}
                >
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerCables;
