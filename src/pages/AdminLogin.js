// src/pages/AdminLogin.js
import React, { useState } from "react";
import axios from "axios";
import { adminBaseUrl } from "../App";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(adminBaseUrl + "/api/auth/login", {
        username,
        password,
      });

      // Save the token in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);

      // Navigate to dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid credentials");
    }
  };

  return (
    <div
      className="container py-5 mb-5 admin-login"
      style={{ maxWidth: "400px" }}
    >
      <div className="mb-4 text-center">
        <img
          src={process.env.PUBLIC_URL + "/images/main-logo.png"}
          alt="BLS Polymers"
          className="me-2"
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
