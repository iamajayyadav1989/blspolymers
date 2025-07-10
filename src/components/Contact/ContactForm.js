import React, { useState } from "react";
import axios from "axios";
import { adminBaseUrl } from "../../App";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      message: `${formData.comments} | Mobile: ${formData.mobile}`,
    };

    // console.log("Sending payload:", payload);

    try {
      const response = await axios.post(adminBaseUrl + "/api/contact", payload);
      alert("Message sent successfully!");
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response?.data || error.message
      );
      alert("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="Name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <input
            type="text"
            name="mobile"
            className="form-control"
            placeholder="Mobile"
            required
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3">
        <textarea
          name="comments"
          className="form-control"
          rows="4"
          placeholder="Comments"
          required
          value={formData.comments}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-submit">
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
