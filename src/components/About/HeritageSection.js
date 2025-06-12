import React from "react";
import heritageIcon from "../../assets/images/heritage-icon.jpg";

const HeritageSection = () => {
  return (
    <section className="heritage-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="heritage-title">
              <img src={heritageIcon} alt="Heritage Icon" /> HERITAGE
            </h3>
            <p className="heritage-text">
              The polymer compounds major that is BLS Polymers today traces its
              roots to the enterprising vision of Sri Vinod Aggarwal who decided
              to venture into the highly technical field of polymers in tune
              with the wave of liberalization that swept the country in the
              early 1990s. BLS Polymers was incorporated in 1991 with the
              objective of manufacturing polymer compounds. Over time, it has
              grown into one of the largest cable compound manufacturers in the
              country.
            </p>
            <p className="heritage-text">
              BLS Polymers prioritizes customer engagement and technical
              expertise to ensure customer satisfaction (and delight). In 2002,
              BLS Polymers set up its new manufacturing plant in Goa (India).
              The Goa plant's port location serves as a strategic advantage
              which helps us serve our customers better.
            </p>
            <p className="heritage-text">
              In 2014, BLS introduced SAP to usher in global best practices and
              further differentiate itself from its competitors in terms of
              quality and processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
