// reportRoutes.js
const express = require("express");
const multer = require("multer");
const {
  getReports,
  createReport,
  deleteReport,
  updateReport, // <-- add this
} = require("../controllers/reportController");

const router = express.Router();

// File upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/uploads/reports"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

router.get("/", getReports);
router.post("/", upload.single("file"), createReport);
router.put("/:id", upload.single("file"), updateReport); // ✅ FIXED
router.delete("/:id", deleteReport);

module.exports = router;
