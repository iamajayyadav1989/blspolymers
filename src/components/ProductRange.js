import React, { useState } from "react";

// Local mock data (you can replace this with API response later)
const productItems = [
  {
    title: "BLS PRODUCT RANGE",
    subtitle: "PE-COMPOUND\n(HDPE, MDPE, LDPE & LLDPE)",
    description: "Polyolefin compound for\nInsulation and Jacketing/Sheathing",
    buttonText: "VIEW MORE",
    buttonLink: "products/pe-compound",
    overlayText: "PE\nCOMPOUND",
    overlayLink: "products/pe-compound",
    image: "layer_83.jpg",
  },
  {
    title: "BLS PRODUCT RANGE",
    subtitle: "Adhesives\n",
    description:
      "Adhesive for reliable bonding\nbetween Top coat & Fusion Bonded Epoxy Layer",
    buttonText: "VIEW MORE",
    buttonLink: "products/adhesive",
    overlayText: "Adhesives",
    overlayLink: "products/adhesive",
    image: "layer_84_adha.jpg",
  },
];

const ProductRange = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = productItems[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productItems.length);
  };

  return (
    <section className="product-range">
      <div className="container-fluid">
        <div className="row">
          {/* Left Side: Text Content */}
          <div className="col-lg-6 pl-10 pr-0">
            <h2 className="section-title mt-5">{data.title}</h2>
            <h3 className="product-title pt-3">
              {data.subtitle.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
            <p className="pt-2">
              {data.description.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <div className="row">
              <div className="col-6">
                <a href={data.buttonLink} className="btn btn-primary mt-5">
                  {data.buttonText}
                </a>
              </div>
              <div className="col-6 d-none d-sm-block">
                {/* Overlay Box */}
                <div className="overlay-box float-end">
                  <div className="overlay-content">
                    {data.overlayText.split("\n").map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                    <a href={data.overlayLink} className="read-more">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Image and Arrow */}
          <div className="col-lg-6 position-relative p-0">
            <img
              src={`${process.env.PUBLIC_URL}/images/${data.image}`}
              alt="Product Range"
              className="img-fluid main-img"
            />
            <div
              className="image-container"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/${data.image})`,
              }}
            >
              <div className="arrow-icon" onClick={handleNext}>
                &#x276F;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
