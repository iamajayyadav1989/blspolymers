import React, { useState, useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";

const ExibitionGallery = ({ galleryItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef(null);
  const bsModalRef = useRef(null); // Bootstrap modal instance

  useEffect(() => {
    if (modalRef.current) {
      bsModalRef.current = new bootstrap.Modal(modalRef.current);
    }
  }, []);

  const showModal = (index) => {
    setCurrentIndex(index);
    bsModalRef.current?.show();
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
            <div className="col-md-6 mb-4" key={index}>
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
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center position-relative">
              <img
                src={`/${galleryItems[currentIndex]?.imageUrl}`}
                alt="Gallery"
                id="modalImage"
                className="img-fluid"
              />
              <button
                type="button"
                className="btn btn-secondary position-absolute start-0 top-50 translate-middle-y"
                onClick={showPrev}
                id="prevBtn"
              >
                ‹
              </button>
              <button
                type="button"
                className="btn btn-secondary position-absolute end-0 top-50 translate-middle-y"
                onClick={showNext}
                id="nextBtn"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExibitionGallery;
