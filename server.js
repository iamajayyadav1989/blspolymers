const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample contact data (can be made dynamic later)
const contactInfo = {
  title: "Get in Touch",
  description:
    "We’d love to hear from you! Reach out to us using the info below.",
  details: {
    phone: "+91-9876543210",
    email: "info@blspolymers.com",
    address: "123, Industrial Road, Delhi, India",
  },
  mapEmbedLink: "https://maps.google.com/?q=Delhi",
};

// GET contact page data
app.get("/api/contact", (req, res) => {
  res.json(contactInfo);
});

// ✅ New Route for your React form
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, mobile, comments } = req.body;

  if (!firstName || !lastName || !email || !mobile || !comments) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Message:</strong></p>
      <p>${comments}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Contact form email sent successfully!");
    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
});

// Import routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Home Page Hero Carousal
const heroRoutes = require("./routes/heroRoutes");
app.use("/api/heroslides", heroRoutes);

// Global Expansion
const globalExpansionRoutes = require("./routes/globalExpansionRoutes");
app.use("/api/globalexpansion", globalExpansionRoutes);

// Product Range
const productRangeRoutes = require("./routes/productRangeRoutes");
app.use("/api/productrange", productRangeRoutes);

// Stats Section
const statsRoutes = require("./routes/statsRoutes");
app.use("/api/stats", statsRoutes);

// Power Cables
const powerCableRoutes = require("./routes/powerCableRoutes");
app.use("/api/powercables", powerCableRoutes);

// Pipe Coating
const pipeCoatingRoutes = require("./routes/pipeCoatingRoutes");
app.use("/api/pipecoating", pipeCoatingRoutes);

// Quality Control
const qualityControlRoutes = require("./routes/qualityControlRoutes");
app.use("/api/qualitycontrol", qualityControlRoutes);

// Clients
const clientsRoute = require("./routes/clients");
app.use("/api/clients", clientsRoute);

// News Section
const newsSectionRoutes = require("./routes/newsSectionRoutes");
app.use("/api/newssection", newsSectionRoutes);

// Global Presence
const globalPresenceRoutes = require("./routes/globalPresenceRoutes");
app.use("/api/global-presence", globalPresenceRoutes);

// Gallery
const galleryRoutes = require("./routes/galleryRoutes");
app.use("/api/gallery", galleryRoutes);

// Uploads
app.use("/api/upload", require("./routes/upload"));

// Static file serving
app.use("/uploads", express.static("uploads"));
app.use("/images", express.static("public/images"));
app.use(express.static(path.join(__dirname, "public")));

// Reports
const reportRoutes = require("./routes/reportRoutes");
app.use("/api/reports", reportRoutes);

// MongoDB connection
const mongoURI =
  process.env.USE_LOCAL_DB === "true"
    ? process.env.MONGO_URI_LOCAL
    : process.env.MONGO_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
