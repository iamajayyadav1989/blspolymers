import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { adminBaseUrl } from "../App";
import { Link } from "react-router-dom";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  const getImage = (imageName) => {
    try {
      return require(`../assets/images/${imageName}`);
    } catch (err) {
      console.error("Image not found:", imageName);
      return null; // fallback image if needed
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const fetchProducts = async () => {
      try {
        const response = await axios.get(adminBaseUrl + "/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="product-section">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between pb-4">
          <div className="col" data-aos="fade-right">
            <h2 className="section-title">OPTICAL FIBRE CABLES</h2>
          </div>
          <div className="col-auto" data-aos="fade-left">
            <Link to="products" className="btn btn-primary">
              MORE PRODUCTS
            </Link>
          </div>
        </div>

        <div className="row">
          {products.map((product, index) => (
            <div
              key={index}
              className="col-md-6"
              data-aos={index === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >
              <div
                className="product-card"
                style={{
                  backgroundImage: `url(${getImage(product.image)})`,
                }}
              >
                <Link
                  to={`/products/${product.slug || product._id}`}
                  className="overlay-link"
                >
                  <div className={`overlay ${index === 1 ? "active" : ""}`}>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
