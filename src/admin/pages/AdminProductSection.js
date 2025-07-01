import React, { useEffect, useState } from "react";
import axios from "axios";

import { adminBaseUrl } from "../../App";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CButton,
} from "@coreui/react";

const AdminProductSection = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get(adminBaseUrl + "/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error loading products", err));
  };

  const handleInputChange = (e, index) => {
    const updated = [...products];
    updated[index][e.target.name] = e.target.value;
    setProducts(updated);
  };

  const handleUpdate = (id, index) => {
    axios
      .put(`http://localhost:5000/api/products/${id}`, products[index])
      .then(() => {
        setMessage("Product updated successfully.");
        fetchProducts();
      })
      .catch((err) => {
        console.error("Update failed:", err);
        setMessage("Failed to update product.");
      });
  };

  return (
    <CCard>
      <CCardHeader>Product Section (Optical Fibre Cables)</CCardHeader>
      <CCardBody>
        {products.map((product, i) => (
          <div key={product._id} className="mb-4 border p-3 rounded">
            <CFormLabel>Title</CFormLabel>
            <CFormInput
              name="title"
              value={product.title}
              onChange={(e) => handleInputChange(e, i)}
            />
            <CFormLabel className="mt-2">Description</CFormLabel>
            <CFormTextarea
              name="description"
              value={product.description}
              onChange={(e) => handleInputChange(e, i)}
            />
            <CFormLabel className="mt-2">Image Filename</CFormLabel>
            <CFormInput
              name="image"
              value={product.image}
              onChange={(e) => handleInputChange(e, i)}
            />
            <div className="d-flex gap-2 mt-3">
              <CButton
                color="primary"
                onClick={() => handleUpdate(product._id, i)}
              >
                Update
              </CButton>
            </div>
          </div>
        ))}

        {message && <p className="mt-3 text-success">{message}</p>}
      </CCardBody>
    </CCard>
  );
};

export default AdminProductSection;
