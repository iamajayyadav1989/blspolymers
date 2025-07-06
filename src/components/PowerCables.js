import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { adminBaseUrl } from "../App";
import { Link } from "react-router-dom";

const PowerCables = () => {
  const [data, setData] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a.btn-primary").forEach((el) => {
        if (!el.querySelector("span")) {
          const text = el.textContent.trim();
          el.textContent = "";
          const span = document.createElement("span");
          span.textContent = text;
          el.appendChild(span);
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    AOS.init({ duration: 1000, once: true });

    const fetchData = async () => {
      try {
        const res = await axios.get(`${adminBaseUrl}/api/powercables`);
        setData(res.data);
        setHoveredIndex(0);
      } catch (err) {
        console.error("Failed to load PowerCables", err);
        setError("Failed to load data.");
      }
    };

    fetchData();
  }, []);

  if (error) return <div>{error}</div>;
  if (!data) return <div>Loading...</div>;

  const currentProductImage =
    data.products?.[hoveredIndex]?.image || data.image || "default.jpg";

  return (
    <section className="product-section">
      <div className="container">
        {/* Title and Button */}
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

        {/* Image and Product List */}
        <div className="row">
          <div className="col-lg-6 pr-0" data-aos="fade-right">
            <img
              src={`${process.env.PUBLIC_URL}/images/${currentProductImage}`}
              alt="Power Cable"
              className="img-fluid full-width"
            />
          </div>

          <div className="col-lg-6 pl-0" data-aos="fade-left">
            {Array.isArray(data.products) &&
              data.products.map((product, index) => (
                <Link
                  to={`/products/${product.slug || product._id}`}
                  key={product._id || index} // ✅ Key moved to Link
                  className="product-link" // Optional for styling
                >
                  <div
                    className={`product-info ${
                      index === hoveredIndex ? "active" : ""
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                  >
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerCables;
