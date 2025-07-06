import React, { useState, useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";

const ExibitionGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef(null);
  const bsModalRef = useRef(null);

  const galleryItems = [
    {
      _id: "68130cbaea0efd8c5418a30f",
      title: "Wire & Cable Fair 2015",
      description:
        "BLS Polymers participated at 'Wire & Cable Fair 2015' exhibition from 3rd to 5th December, 2015 organised at Pragati Maidan, New Delhi.",
      imageUrl: "images/photo-3.jpg",
    },
    {
      _id: "68130cbaea0efd8c5418a30e",
      title: "PlastIndia 2009",
      description:
        "BLS Polymers participated at 'PlastIndia 2009' - India's largest plastic exhibition organised by PlastIndia Foundation at Pragati Maidan, New Delhi from 4th to 9th February, 2009.",
      imageUrl: "images/photo-1.jpg",
    },
    {
      _id: "68130cbaea0efd8c5418a310",
      title: "International Wire & Cable Trade Fair for South Asia",
      description:
        "BLS Polymers participated at 'International Wire & Cable Trade Fair for South Asia' organised by Messe Dusseldorf Asia from 13th to 15th October, 2009 at Bangkok, Thailand.",
      imageUrl: "images/photo-2.jpg",
    },
    {
      _id: "68130cbaea0efd8c5418a311",
      title: "Our Manufacturing Unit",
      description: "",
      imageUrl: "images/Unit_01.jpg",
    },
  ];

  useEffect(() => {
    if (modalRef.current) {
      bsModalRef.current = new bootstrap.Modal(modalRef.current, {
        backdrop: true,
        keyboard: true,
      });
    }
  }, []);

  const showModal = (index) => {
    setCurrentIndex(index);
    bsModalRef.current?.show();
  };

  const hideModal = () => {
    bsModalRef.current?.hide();

    // Fallback: manually remove backdrop if stuck
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) backdrop.remove();
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const showPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
    );
  };

  return (
    <section className="events-section container pt-5 gallery-section">
      <h3 className="section-title">EXHIBITIONS PHOTO GALLERY</h3>
      <div className="row pt-3">
        {galleryItems.length === 0 ? (
          <p>No gallery items found.</p>
        ) : (
          galleryItems.map((item, index) => (
            <div className="col-md-6 mb-4" key={item._id}>
              <div className="event-card">
                <img
                  src={`/${item.imageUrl}`}
                  className="event-image"
                  alt={item.title}
                  style={{ cursor: "pointer" }}
                  onClick={() => showModal(index)}
                />
                <h5 className="px-2 py-2">
                  <strong>{item.title}</strong>
                </h5>
                <p className="px-2 py-2">{item.description}</p>
              </div>
            </div>
          ))
        )}
        <div className="col-md-12 pb-4">
          <hr />
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="galleryModal"
        tabIndex="-1"
        ref={modalRef}
        aria-labelledby="galleryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {galleryItems[currentIndex]?.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={hideModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center position-relative">
              <img
                src={`/${galleryItems[currentIndex]?.imageUrl}`}
                alt="Gallery"
                className="img-fluid"
              />
              <button
                type="button"
                className="btn btn-secondary position-absolute start-0 top-50 translate-middle-y"
                onClick={showPrev}
              >
                ‹
              </button>
              <button
                type="button"
                className="btn btn-secondary position-absolute end-0 top-50 translate-middle-y"
                onClick={showNext}
              >
                ›
              </button>
            </div>
            {galleryItems[currentIndex]?.description && (
              <div className="modal-footer">
                <p className="text-start">
                  {galleryItems[currentIndex]?.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExibitionGallery;
