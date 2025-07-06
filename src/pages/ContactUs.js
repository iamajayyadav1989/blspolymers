import React, { useEffect, useState } from "react";
import axios from "axios";
import { adminBaseUrl } from "../App";
import ContactHero from "../components/Contact/ContactHero";
import ContactDetails from "../components/Contact/ContactDetails";
import ContactForm from "../components/Contact/ContactForm";
import MapSection from "../components/Contact/MapSection";

const ContactUs = () => {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      document.querySelectorAll("button.btn-primary").forEach((el) => {
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

    const fetchContactData = async () => {
      try {
        const response = await axios.get(adminBaseUrl + "/api/contact");
        setContactData(response.data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchContactData();
  }, []);

  if (!contactData) return <div>Loading...</div>;

  return (
    <>
      <ContactHero />
      <section className="contact-section">
        <div className="container">
          <h3 className="section-title contact-title">{contactData.title}</h3>
          <p className="contact-info">{contactData.description}</p>

          <div className="row pt-4">
            <ContactDetails data={contactData.details} />
            <MapSection mapEmbedLink={contactData.mapEmbedLink} />
          </div>

          <div className="mt-4" />
          <div className="row">
            <div className="col-lg-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
