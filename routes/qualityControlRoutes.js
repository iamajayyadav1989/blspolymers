const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  getQualityControl,
  updateQualityControl,
} = require("../controllers/qualityControlController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  allowedTypes.includes(file.mimetype)
    ? cb(null, true)
    : cb(new Error("Invalid file type!"), false);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
});

router.get("/", getQualityControl);
router.put("/:id", upload.single("image"), updateQualityControl);

module.exports = router;
