import React from "react";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="career-hero-section d-flex">
        <div className="container">
          <div className="breadcrumb-container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li
                  className="breadcrumb-item active text-danger"
                  aria-current="page"
                >
                  Working at BLS Polymers
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container about-section pb-4">
        <h3 className="section-title mt-5">Working at BLS Polymers</h3>
        <p className="about-text">
          BLS Polymers is an established and dynamic firm, with a youthful and
          enthusiastic team determined to accomplish the vision of becoming a
          world leader in Polymers industry. It is a specialist in manufacturing
          polymeric cable compounds and has deep industry ties spanning more
          than 2 decades. The accumulated expertise of its technical and
          managerial experts has helped it build an enviable body of knowledge
          in polymeric formulations, quality control and process efficiency.
        </p>
      </div>

      {/* Why BLS Section */}
      <section className="heritage-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="heritage-title">
                <img src="/images/why-bls.png" alt="Heritage Icon" /> Why BLS
                Polymers?
              </h3>
              <p className="heritage-text">
                BLS Polymers is an established and dynamic firm, with a youthful
                and enthusiastic team determined to accomplish the vision of
                becoming a world leader in Polymers industry and India’s largest
                polymer compounder. BLS Polymers Limited is a specialist polymer
                compounds manufacturer with strong expertise in wire and cable
                compounds. As one of the reputed companies in polymer compounds
                industry space with more than two decades of it, it offers
                Polyolefin and Vinyl based Compounds used in power, telecom, and
                infrastructure sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="row text-center">
            {[
              {
                img: "/images/career-1.png",
                title: "Strong Domain Exposure",
                desc: "With its state-of-the-art research lab, BLS is leading the way in innovating new compounds to meet exacting customer requirements. Coupled with a modern industrial manufacturing facility, this provides an ideal opportunity to gain expertise in the world of polymers and compounds. This, along with our industry linkages, means BLS Polymers is the ideal platform for career growth.",
              },
              {
                img: "/images/career-2.png",
                title: "Talented Team",
                desc: "BLS Polymers places strong emphasis on people and relationships. This approach gets reflected in our value-set, which is what has helped us maintain enduring ties with our customer base for more than two decades. BLS Polymers provides an environment where you will find yourself surrounded by people who love what they do and want to help you succeed.",
              },
              {
                img: "/images/career-3.png",
                title: "Personal Growth",
                desc: "BLS Polymers gives a lot of leeway and flexibility in working for the company and this sense of empowerment makes the hard work rewarding. We strive to ensure that our products meet the highest quality standards through sustained focus on a process driven framework. This commitment to quality gets translated to best-practices being imbibed in the approach of each and every employee.",
              },
            ].map((item, i) => (
              <div
                className={`col-md-4 value-item ${i < 2 ? "border-end" : ""}`}
                key={i}
              >
                <div className="icon-box">
                  <img src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="value-divider"></div>

          <div className="row text-center mt-4 justify-content-center">
            {[
              {
                img: "/images/career-4.png",
                title: "Work-Life Balance",
                desc: "The BLS Polymers team believes in work-life balance. We make strong efforts to ensure proper prioritization between work (career and ambition) and lifestyle (health, family, leisure, and spiritual development/meditation).",
              },
              {
                img: "/images/career-5.png",
                title: "Global Engagement",
                desc: "A global customer base built around the pillars of service excellence in product quality, delivery, and customer engagement means that opportunities to not only engage with a global audience but also imbibe global best practices in management.",
              },
            ].map((item, i) => (
              <div
                className={`col-md-4 value-item ${i === 0 ? "border-end" : ""}`}
                key={i}
              >
                <div className="icon-box">
                  <img src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
