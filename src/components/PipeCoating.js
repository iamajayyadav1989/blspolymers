import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS
import { adminBaseUrl } from "../App";

const PipeCoating = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // animation duration
      once: true, // only animate once
    });

    axios
      .get(adminBaseUrl + "/api/pipecoating")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) return null;

  return (
    <section className="product-section pipe-coating">
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
          {data.products.map((item, index) => (
            <div
              key={index}
              className="col-md-6"
              data-aos={index === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >
              <div
                className="product-card"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.image})`,
                }}
              >
                <div className={`overlay ${index === 1 ? "active" : ""}`}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipeCoating;
